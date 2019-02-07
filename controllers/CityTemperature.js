const CityTemperature = require('../models/CityTemperature');
const config = require('../config/keys')
const axios = require('axios')

/*
* Returns temperature for a list of cities separated by |
* @param cities[] 
*/
exports.fetchTemperatures =  async (req, res, next) => {
    const cities = req.params.cities.split('|')
    const asyncTasks = cities.map( city =>{
        return fetchCityTemp(city)
    })

    try {
        const response = await Promise.all(asyncTasks)
        res.json({'status':200,'data':response})
    } catch(e) {
        res.json({'status':400,'err': 'Something went wrong!'})
    }
    
}

async function fetchCityTemp(city)
{   
    try{
        const cityName = city.toLowerCase()
        const hourAgo =  new Date(Date.now() - 1000 * 60 * 60)
        const cityTemp = await CityTemperature.findOne({'cityName': cityName, updatedAt:{$gte: hourAgo}}).exec()
        if(cityTemp) { 
            return {'city':cityTemp.cityName,'temperature':cityTemp.temperature}
        } 
        else {
            const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${config.OPEN_WEATHER_API_KEY}`
            
            try {
                const resp = await axios.get(endpoint)
                const temperature = resp.data.main.temp
                
          
                const result = await CityTemperature.findOneAndUpdate(
                    {cityName}, 
                    {cityName, temperature},
                    {upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true}, 
                ).exec();
                if(result) return {'city':result.cityName,'temperature':result.temperature} 
                return null;

            } catch(e) {
                console.log(e.message)
                return {error: `Could not fetch temperature for city ${city}`}
            }
        }
    } catch(e) {
        console.log(e.message)
        return null
    }

}