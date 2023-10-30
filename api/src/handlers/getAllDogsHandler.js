const { getAllDogs } = require("../controllers/getAllDogsController");
const { getDogByRace } = require("../controllers/getDogByRaceCon");

const getAllDogsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const lowerCaseName = name.toLowerCase();
      const dogByRace = await getDogByRace(lowerCaseName);
      if (dogByRace.length === 0) {
        res.status(404).json({ message: "Raza no encontrada" });
      }
      res.status(200).json(dogByRace);
    } else {
      const response = await getAllDogs();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllDogsHandler,
};
