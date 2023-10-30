require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const { Dog, Temperament } = require("../db");

const getDogById = async (id, source) => {
  const dog =
    source === "api"
      ? (await axios(`https://api.thedogapi.com/v1/breeds/${id}?${API_KEY}`))
          .data
      : await Dog.findByPk(id, {
          include: {
            model: Temperament,
            attributes: ["name"],
          },
        });

  return dog;
};

module.exports = { getDogById };
