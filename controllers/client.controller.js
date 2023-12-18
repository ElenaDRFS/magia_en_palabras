// interacción con la base de datos por front del clienteç
// los datos recibidos lo manejamos desde el front, lo que haremos será hacer la llamada a la api y luego setear estados con los datos, todo eso dentro de un use effect, el parámetro a cambiar será el personaje o el título

require("../config/mongoAtlasConnection.js");
const Tale = require("../models/talesSchema.js");

const getTalesByCharacter = async (req, res) => {
    try {
      const characterSearch = req.params.character;
      const tales = await Tale.find({character: characterSearch});
      res.status(200).json(tales);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los cuentos por personaje" });
    }
  };


  const getTalesByTitle = async (req, res) => {
    try {
      const titleSearch = req.params.title;
      const tales = await Tale.find({ title: { $regex: titleSearch, $options: 'i' } });
      console.log(tales)
      res.status(200).json(tales);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los cuentos por título" });
    }
  };

 


  module.exports = {
    getTalesByCharacter,
    getTalesByTitle,
  }