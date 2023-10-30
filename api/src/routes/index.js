const { Router } = require('express');
const {getAllDogsHandler} = require('../handlers/getAllDogsHandler')
const {getDogByIdHandler} = require('../handlers/getDogByIdHandler')
const {createDogHandler} = require('../handlers/createDogHandler')
const {getTemperamentsHandler} = require('../handlers/getTemperamentsHandler')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getAllDogsHandler)
router.get('/dogs/:id', getDogByIdHandler)
router.post('/dogs', createDogHandler)
router.get('/temperaments', getTemperamentsHandler)

module.exports = router;
