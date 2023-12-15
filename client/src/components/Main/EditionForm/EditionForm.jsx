import React from "react";

const EditionForm = () => {
  //esta función enviará los datos del formulario a cloudstore, y al backend para recogerlos por req.body 
  const handleSubmit = () => {

  }
  return <form>

    <fieldset>
      <legend>Selecciona el título del cuento para editar sus campos</legend>
      <select name="tale" id="tale">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <label htmlFor="character">Personaje principal<input type="text" name="character"/></label><br />
      <textarea name="" id="" cols="30" rows="10" placeholder="Érase una vez..."></textarea><br />
      <label htmlFor=""><input type="file" name="img" id="img" /></label><br />
      <label htmlFor=""><input type="file" name="audio" id="audio" /></label><br />
      <input type="submit" value="Crear" />
    </fieldset>


  </form>;
};

export default EditionForm;