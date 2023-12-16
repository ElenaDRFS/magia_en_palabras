// toda la lógica de rutas que interactuan con la bbdd desde el admin

const express = require("express");
const router = express.Router();
const adminController = require('../controllers/admin.controller');


router.get("/tales",adminController.getAllTales);
router.post("/createTale", adminController.createTale);
router.delete("/deleteTale/:title",adminController.deleteTale);
router.put("/editTale/:title", adminController.editTale);

router.post('/', async (req, res) => {
    // destructure the request
    const { title,character,storie,image,audio } = req.body;
  
    // create a new contact object via schema and destructured values
    try {
      const newContact = new Contact({
        title,character,storie,image,audio
      });
      // save contact databases and respond with new contact in json form
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error, POST Method');
    }
  });

module.exports = router;