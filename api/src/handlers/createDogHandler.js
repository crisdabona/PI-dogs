const { createDog } = require("../controllers/createDogCon");

const createDogHandler = async (req, res) => {
  const { image, name, height, weight, life_span, temperament } = req.body;

  try {
    const response = await createDog(image, name, height, weight, life_span, temperament);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createDogHandler };
