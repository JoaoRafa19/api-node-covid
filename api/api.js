const axios = require('axios');

const api2 = axios.create({
  baseURL:'https://api.covid19api.com/'
});

module.exports = api2;