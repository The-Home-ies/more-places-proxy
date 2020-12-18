const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

// HTTP request logger middlaware
// 'dev' option provides colored response for development use
// app.use(morgan('dev'));
app.use('/:id', express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/:id/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);
// app.use('/', router.api);


module.exports = app;
