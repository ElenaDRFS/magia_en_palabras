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
      <button className="normal-button" onClick={logOut}>Cerrar sesión</button>

      <article>
        <form onSubmit={handleSubmit}>
          <input className="inputs" type="text"  placeholder="buscador por título" name="title" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button className="submit-button"type="submit">Buscar</button>
        </form>
      </article>

      <article>
        <p>Clica en los botones para buscar por persoanajes</p>
      </article> 
      <article>
        {createCharacter()}
      </article>
        
        
         

      
    </section>;
};

export default Search;
