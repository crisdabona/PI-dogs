const { Router } = require('express');
const {getAllDogsHandler} = require('../handlers/getAllDogsHandler')
const {getDogByIdHandler} = require('../handlers/getDogByIdHandler')
const {createDogHandler} = require('../handlers/createDogHandler')
const {getTemperamentsHandler} = require('../handlers/getTemperamentsHandler')
const {getOriginHandler} = require('../handlers/getOriginHandler')



const router = Router();


router.get('/dogs', getAllDogsHandler)
router.get('/dogs/:id', getDogByIdHandler)
router.post('/dogs', createDogHandler)
router.get('/temperaments', getTemperamentsHandler)
router.get('/origins', getOriginHandler)

module.exports = router;
