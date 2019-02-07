const mongoose = require('mongoose');

const cityTemperatureSchema = new mongoose.Schema({
    cityName:  { type: String, required: true , unique: true },
    temperature: { type: Number, required: true }
}, { timestamps: true })


const CityTemperature = mongoose.model('CityTemperature', cityTemperatureSchema)
module.exports = CityTemperature