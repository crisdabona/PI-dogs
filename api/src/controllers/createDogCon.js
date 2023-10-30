
const { Dog } = require("../db");

const createDog = async (image, name, height, weight, life_span) => {
  const metricHeight = height.metric
  const metricWeight = weight.metric
  return await Dog.create({image, name, height: metricHeight, weight: metricWeight, life_span})
}

module.exports = {createDog}