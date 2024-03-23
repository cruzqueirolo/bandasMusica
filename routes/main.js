let express = require('express');
let router = express.Router();
let bandaController = require('../controllers/bandaController')

router.get("/",bandaController.listaBandas);
router.get("/detalle/:id",bandaController.id);
router.get("/genero/:genero", bandaController.genero);


module.exports = router