require("dotenv").config();
const axios = require("axios");
const { cleaner } = require("../utils/cleaner");
const { API_KEY } = process.env;

const { Dog } = require("../db");

const getAllDogs = async () => {
  const dogGB = await Dog.findAll();

  const api = (await axios(`https://api.thedogapi.com/v1/breeds?${API_KEY}`))
    .data;

  const dogsApi = cleaner(api);

  return [...dogGB, ...dogsApi];
};

module.exports = { getAllDogs };
