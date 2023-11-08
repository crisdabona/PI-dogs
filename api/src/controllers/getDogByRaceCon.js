require("dotenv").config();
const axios = require("axios");
const { cleaner } = require("../utils/cleaner");
const { API_KEY } = process.env;

const { Dog } = require("../db");

const getDogByRace = async (race) => {
  const api = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`))
    .data;

  const dogsApi = cleaner(api);

  const searchRace = race.toLowerCase()

  const dogsfiltered = dogsApi.filter((dog) => dog.name.toLowerCase() === searchRace);

  const dogDB = await Dog.findAll({ where: { name: searchRace } });

  return [...dogsfiltered, dogDB];
};

module.exports = { getDogByRace };
