require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const {Origin} = require('../db')

const getOrigins = async () => {
  const originApi = (
    await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;

  const allOrigins = originApi
    .filter((dog) => dog.origin)
    .map((dog) =>
      dog.origin.split(", ").map((origin) => origin.trim())
    )
    .flat();

  const origins = [...new Set(allOrigins)];

  for (const originName of origins) {
    await Origin.findOrCreate({where: { name: originName }});
  }

  return origins;
};

module.exports = {getOrigins}