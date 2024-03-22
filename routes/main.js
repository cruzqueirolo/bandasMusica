let express = require('express');
let router = express.Router();
let bandaController = require('../controllers/bandaController')

router.get("/",bandaController.index);
router.get("/detalle/:id",bandaController.show);
//router.get("/bio/:id/",heroeController.bio);


module.exports = router