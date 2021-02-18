const axios = require('axios');

const api2 = axios.create({
  baseURL:'https://covid19-api.org/'
});

module.exports = api2;