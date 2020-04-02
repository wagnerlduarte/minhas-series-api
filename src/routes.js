const express = require('express');
const routes = express.Router();

require('./routes/ProductRoutes')(routes);
require('./routes/SerieRoutes')(routes);
require('./routes/AuthRoutes')(routes);

module.exports = routes;