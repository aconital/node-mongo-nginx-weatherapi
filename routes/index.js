const express = require('express')
const router = express.Router()

const cityTemperatureController = require('../controllers/CityTemperature')


router.get('/cities/:cities', cityTemperatureController.fetchTemperatures)


module.exports = router
