const express = require('express');
const routes = express.Router();

require('./routes/ProductRoutes')(routes);
require('./routes/SerieRoutes')(routes);

module.exports = routes;