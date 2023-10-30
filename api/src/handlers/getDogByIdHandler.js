const {getDogById} = require('../controllers/getDogByIdCon')

const getDogByIdHandler = async (req, res) =>{
  const {id} = req.params

  const source = isNaN(id) ? 'bdd' : 'api'

  try {
    const response = await getDogById(id, source)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {getDogByIdHandler}