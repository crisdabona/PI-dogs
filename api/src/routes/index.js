const { Router } = require('express');
const {getAllDogsHandler} = require('../handlers/getAllDogsHandler')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', getAllDogsHandler)

module.exports = router;
