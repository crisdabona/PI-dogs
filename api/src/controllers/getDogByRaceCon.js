require("dotenv").config();
const axios = require("axios");
const { cleaner } = require("../utils/cleaner");
const { API_KEY } = process.env;

const { Dog } = require("../db");

const getDogByRace = async (race) => {
  const api = (await axios(`https://api.thedogapi.com/v1/breeds?${API_KEY}`))
    .data;

  const dogsApi = cleaner(api);

  const dogsfiltered = dogsApi.filter((dog) => dog.name === race);

  const dogDB = await Dog.findAll({ where: { name: race } });

  return [...dogsfiltered, dogDB];
};

module.exports = { getDogByRace };