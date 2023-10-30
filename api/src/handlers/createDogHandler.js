const { createDog } = require("../controllers/createDogCon");

const createDogHandler = async (req, res) => {
  const { image, name, height, weight, life_span } = req.body;

  try {
    const response = await createDog(image, name, height, weight, life_span);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createDogHandler };
