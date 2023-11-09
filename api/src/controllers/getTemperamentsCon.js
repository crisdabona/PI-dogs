require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const {Temperament} = require('../db')

const getTemperaments = async () => {
  const temperamentsApi = (
    await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  ).data;

  const allTemperaments = temperamentsApi
    .filter((dog) => dog.temperament)
    .map((dog) =>
      dog.temperament.split(", ").map((temperament) => temperament.trim())
    )
    .flat();

  const temperaments = [...new Set(allTemperaments)];

  for (const temperamentName of temperaments) {
    await Temperament.findOrCreate({where: { name: temperamentName }});
  }

  return temperaments;
};

module.exports = {getTemperaments}