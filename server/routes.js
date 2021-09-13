const express = require("express");
const weatherRoute = require("./routes/OpenWeatherMap");

module.exports = function(app) {
  app.use(express.json());

  app.use('/api/weather/:type', weatherRoute);

};