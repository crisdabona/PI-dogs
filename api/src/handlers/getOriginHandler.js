const {getOrigins} = require('../controllers/getOriginController')

const getOriginHandler = async(req, res) => {
  try {
    const origins = await getOrigins()
    res.status(200).json(origins)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {getOriginHandler}