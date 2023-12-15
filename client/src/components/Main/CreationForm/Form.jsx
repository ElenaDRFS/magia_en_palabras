import React from "react";

const Form = () => {
  //esta función enviará los datos del formulario a cloudstore, y al backend para recogerlos por req.body 
  const handleSubmit = () => {

  }
  return <form>

    <fieldset>
      <legend>Rellena todos los campos para crear un nuevo cuento</legend>
      <label htmlFor="title">Título<input type="text" name="title" /></label><br />
      <label htmlFor="character">Personaje principal<input type="text" name="character"/></label><br />
      <textarea name="" id="" cols="30" rows="10" placeholder="Érase una vez..."></textarea><br />
      <label htmlFor=""><input type="file" name="img" id="img" /></label><br />
      <label htmlFor=""><input type="file" name="audio" id="audio" /></label><br />
      <input type="submit" value="Crear" />
    </fieldset>


  </form>;
};

export default Form;

