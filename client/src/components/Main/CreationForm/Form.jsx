import React from "react";

const Form = () => {
  //esta función enviará los datos del formulario a cloudstore, y al backend para recogerlos por req.body 
  const handleSubmit = () => {

  }
  return <form className="login-form">

    <fieldset>
      <legend>Rellena todos los campos para crear un nuevo cuento</legend>
      <label  htmlFor="title">Título</label>
      <input className="inputs"  type="text" name="title" />
      <label htmlFor="character">Personaje principal</label>
      <input className="inputs"  type="text" name="character"/>
      <textarea name="storie" id="storie" cols="30" rows="10" placeholder="Érase una vez..."></textarea>
      <label htmlFor="img">Imagen</label>
      <input type="file" name="img" id="img" />
      <label htmlFor="audio">Audiolibro</label>
      <input type="file" name="audio" id="audio" />

      
    </fieldset>
    <button className="submit-button"type="submit">Empezar</button>


  </form>;
};

export default Form;

