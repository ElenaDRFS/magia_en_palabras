import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate} from "react-router-dom";





const Search = ({search, press, info}) => {
  // info son todos los cuentos, lo usaremos para pintar los botones

  const navigate = useNavigate();
  const[input, setInput] = useState("");

  const logOut = async () => {
    navigate("/")
  };

  const handleClick = (event,value) =>{
    event.preventDefault();
    press(value);
   
  }

  const handleSubmit = (event) => {

      event.preventDefault();
      if(!event.target.title.value){
        Swal.fire("Escribe algún título o palabra que contenga");
      }else{
      search(event.target.title.value) //rellenamos el estado de main con lo que se ponga en el input
      setInput("")  
      
  }}
  

  
// creamos un boton para cada personaje, como en los pokeapi. 
  const createCharacter = () => {
  
      const uniqueCharacters = new Set(info.map((item) => item.character));
      const uniqueCharacterArray = [...uniqueCharacters];

      // mapeamos el array de unicos para crear las options
      const options = uniqueCharacterArray.map((character, i) => (
        <button className="character-button"type="click" key={i} value={character} onClick={(event) => handleClick(event, character)}>
          {character}
        </button>
      ));

      return options;
};

  return <section>

      <h3>Si quieres salir pulsa</h3>
      <button id="log-out" className="normal-button" onClick={logOut}>Cerrar sesión</button>
      <svg id="svg-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#392759" fill-opacity="0.7" d="M0,64L120,85.3C240,107,480,149,720,160C960,171,1200,149,1320,138.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>


      <article>
        <form onSubmit={handleSubmit}>
          <input className="inputs" type="text"  placeholder="buscador por título" name="title" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button
          className="submit-button"type="submit">Buscar</button>
        </form>
      </article>

      <article>
        <p>Clica en los botones para buscar por personajes o temáticas</p>
      </article> 
      <article>
        {createCharacter()}
      </article>
        
        
         

      
    </section>;
};

export default Search;
