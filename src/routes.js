const express = require('express')
const routes = express.Router()

require('./app/routes/ProductRoutes')(routes)
require('./app/routes/SerieRoutes')(routes)
require('./app/routes/AuthRoutes')(routes)

module.exports = routes
