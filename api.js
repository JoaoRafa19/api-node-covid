const axios = require('axios');

const api = axios.create({
  baseURL:'https://api.covid19api.com/'
});

module.exports = api;