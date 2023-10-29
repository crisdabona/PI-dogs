const { getAllDogs } = require("../controllers/getAllDogsController");
const { getDogByRace } = require("../controllers/getDogByRaceCon");

const getAllDogsHandler = async (req, res) => {
  const { race } = req.query;

  try {
    if (race) {
      const dogByRace = await getDogByRace(race);
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
}
