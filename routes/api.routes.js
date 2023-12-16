// toda la lógica de rutas que interactuan con la bbdd desde el admin

const express = require("express");
const router = express.Router();
const adminController = require('../controllers/admin.controller');


router.get("/tales",adminController.getAllTales);
router.post("/createTale", adminController.createTale);
router.delete("/deleteTale/:title",adminController.deleteTale);
router.put("/editTale/:title", adminController.editTale);

module.exports = router;