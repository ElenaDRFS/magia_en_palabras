// rutas de interacción con la bbdd desde el cliente
const express = require("express");
const router = express.Router();
const adminController = require('../controllers/admin.controller');

// ruta para bbotón según el personaje
router.get("/tales/:character");

// ruta para buscador por título
router.get("/tales/:title");

// ruta para detalles de cada cuento por título
router.get("/tale/detail/:title")


module.exports = router;
