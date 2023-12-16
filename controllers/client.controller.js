const getTalesByCharacter = async (req, res) => {
    try {
      const characterSearch = req.params.character;
      const tales = await Tale.find({character: characterSearch});
      res.status(200).json(tales);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener todas los cuentos" });
    }
  };