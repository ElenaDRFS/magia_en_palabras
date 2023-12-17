import React from "react";
import { Link } from "react-router-dom";
 
const Form = () => {


  //esta función enviará los datos del formulario a cloudstore, y al backend para recogerlos por req.body 
  const handleSubmit = () => {

  }
  return  <section>

    <Link to="/admin"><img src="./volver.png" alt="flecha" /></Link>
    <form className="creation-form">

      <legend>Rellena todos los campos para crear un nuevo cuento</legend>
      <label htmlFor="title">Título<input className="inputs"  type="text" name="title" /></label>

      <label htmlFor="character">Personaje principal<input className="inputs"  type="text" name="character"/></label>

      <textarea name="storie" id="storie" cols="30" rows="10" placeholder="Érase una vez..."/><br />

      <label htmlFor="img">Imagen<input type="file" name="img" id="img" /></label>

      <label htmlFor="audio">Audiolibro<input type="file" name="audio" id="audio" /></label>

      
    
    <button className="submit-button"type="submit">Crear</button>


  </form>
  </section> 
};

export default Form;

