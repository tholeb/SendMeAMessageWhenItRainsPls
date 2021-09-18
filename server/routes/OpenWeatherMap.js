const axios = require("axios");

module.exports = async function (req, res) {
    const getServerIP = () => new Promise(async (resolve, reject) => {
    // Get server (local) IP
    let ipReq = await axios.get("http://ipv4bot.whatismyipaddress.com/", {
      validateStatus: (status) => status === 200,
      });
      
      resolve(ipReq.data);
    }).then(async (ip) => {
      // Get IP Location (Lat, Lon,...)
      try {
        const options = `?fields=status,message,country,regionName,city,zip,lat,lon,mobile,proxy,query`;
        let resp = await axios.get(`http://ip-api.com/json/${ip + options}`, {
          validateStatus: (status) => status === 200,
        });
        ip = resp.data;
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error);
      }
      return ip
    });

  getServerIP().then(async (ip) => {
      try {
        if (req.params.type === undefined) return res.sendStatus(400);
        let options = `?appid=${process.env.OPEN_WEATHER_MAP_TOKEN}&units=metric&lang=fr`;
  
        switch (req.params.type) {
          case "onecall":
            options += `&lat=${ip.lat}&lon=${ip.lon}&exclude=hourly,minutely`;
            break;
        
          default:
            options += `&q=${ip.city}`;
            break;
        }
  
        let resp = await axios.get(
          `https://api.openweathermap.org/data/2.5/${req.params.type + options}`,
          {validateStatus: (status) => status === 200}
        );
        console.log(`Access to '/api/weather/${req.params.type}'`);
        const data = {...resp.data, ...{ip:ip}}
        await res.json(data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
  
          // If error send this status
          res.sendStatus(error.response.data.cod).send(error.response.data.message);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      }   
    })
}  