const express = require('express')
const authRoutes = express.Router()
const serieRoutes = express.Router()

require('./app/routes/AuthRoutes')(authRoutes)
require('./app/routes/SerieRoutes')(serieRoutes)

module.exports = [authRoutes, serieRoutes]
