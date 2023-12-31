require("../config/mongoAtlasConnection.js");
const Tale = require("../models/talesSchema.js");


// la función de crear lo que hará será: 1, recoger los datos, 2. guarda en cloudstore la imagen y el audio y devuelve la url generada, 3. crea el nuevo Tale y retorna una alerta o mensaje de todo ok. 


const createTale = async (req, res) => {  
  
    try {
      const newTale = new Tale(req.body);
      console.log(req.body)

      const savedTale = await newTale.save();  //guardamos el cuento que hemos recibido
      res.json(savedTale);   //si todo va guay, le mandamos al front este mensajito
    } catch (error) {
      res.status(500).json(error);
    }
  };

  const getAllTales = async (req, res) => {
    try {
      const tales = await Tale.find({});
      res.status(200).json(tales);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener todas los cuentos" });
    }
  };
  
  const editTale = async (req, res) => {
    const movieTitle = req.params.title;
    const newData = req.body;
  
    try {
      const updatedTale = await Tale.findOneAndUpdate(
        { title: movieTitle },
        newData,
        {
          new: true,
        }
      );
      res.json(updatedTale);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  
  const deleteTale = async (req, res) => {
    const taleTitle = req.params.title;
    try {
      const deletedTale = await Tale.findOneAndDelete({ title: taleTitle });
      res.json(deletedTale);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

  
  const controllers = {
    createTale,
    getAllTales,
    editTale,
    deleteTale

  };
  module.exports = controllers;

