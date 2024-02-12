import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Search = ({ search, press, info }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const resultsRef = useRef(null); // creamos una referencia para el espacio donde se muestran os cuentos, y hacemos referencia para manda ahí la patalla con el scrollintoview


  const logOut = async () => {
    navigate("/");
  };

  const handleClick = (event, value) => {
    event.preventDefault();
    press(value);
    scrollToResults();
  };

  const scrollToResults = () => {
    resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event) => {   //tenemos que manejar el error de que no haya coincidencias de título
    event.preventDefault();
    if (!event.target.title.value) {
      Swal.fire("Escribe algún título o palabra que contenga");
    } else {
      search(event.target.title.value);
      setInput("");
      scrollToResults(); 
    }
  };

  

  const createCharacter = () => {
    const uniqueCharacters = new Set(info.map((item) => item.character));
    const uniqueCharacterArray = [...uniqueCharacters];

    const options = uniqueCharacterArray.map((character, i) => (
      <button
        className="character-button"
        type="click"
        key={i}
        value={character}
        onClick={(event) => handleClick(event, character)}
      >
        {character}
      </button>
    ));

    return options;
  };

  return (
    <section>
      <section id="welcome-section">
      
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            id="search-input"
            type="text"
            placeholder="buscador por título"
            name="title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button id="search-button" type="submit">
            Buscar
          </button>
        </form>
      

      <button id="log-out" className="normal-button" onClick={logOut}>
        Cerrar sesión
      </button>

      </section>
      
      <svg
        id="svg-search"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#392759"
          fillOpacity="0.7" // Corregir el nombre de la propiedad
          d="M0,64L120,85.3C240,107,480,149,720,160C960,171,1200,149,1320,138.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      
    <section id="buttons-section">
    <article >
        <p id="instructions">Clica en los botones para buscar por personajes o temáticas</p>
      </article>
      <article>{createCharacter()}</article>

    </section>
      

      {/* Referencia para la sección de resultados */}

      <section className="results" ref={resultsRef}>

      </section>
    </section>
  );
};

export default Search;
