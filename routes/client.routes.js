// rutas de interacción con la bbdd desde el cliente
const express = require("express");
const router = express.Router();
const clientControllers = require("../controllers/client.controller")
// ruta para bbotón según el personaje
router.get("/tales/:character", clientControllers.getTalesByCharacter);

// ruta para buscador por título
router.get("/cuentos/:title", clientControllers.getTalesByTitle);





module.exports = router;
