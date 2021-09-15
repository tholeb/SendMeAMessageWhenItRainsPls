const axios = require("axios");

module.exports = async function(req, res) {
    try {
      if(req.params.type === undefined) return res.sendStatus(400);
      let resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/${req.params.type}?q=Nantes,fr&appid=${process.env.OPEN_WEATHER_MAP_TOKEN}&units=metric&lang=fr`,
        {validateStatus: (status) => status === 200}
      );
      console.log(`Access to '/api/weather/${req.params.type}'`);
      await res.json(resp.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);

        // If error send this status
        res.sendStatus(error.response.data.cod);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error);
    }
}  