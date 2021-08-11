const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter = require('./recipes');
const dietsRouter = require('./diets');


const router = Router();

router.use('/recipes', recipesRouter);
router.use('/types', dietsRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
