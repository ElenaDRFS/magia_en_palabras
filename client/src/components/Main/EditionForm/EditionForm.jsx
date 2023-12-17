import React from "react";
import { Link } from "react-router-dom";


const EditionForm = () => {
  //esta función enviará los datos del formulario a cloudstore, y al backend para recogerlos por req.body 
  const handleSubmit = () => {

  }
  return <section>
  <Link to="/admin"><img src="./volver.png" alt="flecha" /></Link>
  
  
  <form>

    
      <legend>Selecciona el título del cuento para editar sus campos</legend>
      <label htmlFor="title">Título</label>
      <select name="title" id="tale"> 
      <optgroup label="Título">
        <option value="titloo">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        </optgroup>
      </select>

      <label htmlFor="character"><input placeholder="Personaje principal" className="inputs" type="text" name="character"/></label>
      <textarea name="" id="" cols="30" rows="10" placeholder="Érase una vez..."></textarea>
      <label htmlFor=""><input type="file" name="img" id="img" /></label>
      <label htmlFor=""><input type="file" name="audio" id="audio" /></label>
     <button className="submit-button" type="submit">Editar</button>
    
  </form>

  </section>
};

export default EditionForm;