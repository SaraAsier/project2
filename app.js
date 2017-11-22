require('dotenv').config();
const app = require('express')();
require('./config/passport')();
require('./config/express')(app);
require('./config/expresscontroller')(app);

const index = require('./routes/index');

app.use('/', index);

require('./config/error-handler')(app);

module.exports = app;
