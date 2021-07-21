const {Router} = require('express');
const {getDiets} = require('../controllers/diets');
const router = Router();

router.get('/', getDiets )

module.exports= router;