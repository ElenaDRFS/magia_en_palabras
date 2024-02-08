import React, { useState } from "react";


function CardDesign({ data }) {
  // desplegar detalles. usaremos un estado true/false para el condicional del return. Si show details es true, se enseñan los detalles, sino se esconden, además cambia el texto del botón
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
   
      <section className="card-container">
        <img className="card-img" variant="top" src={data.image} />
        <section>
          <h2 className="card-title">{data.title}</h2>

          <button
            variant="primary"
            className="card-button"
            onClick={toggleDetails}
          >
            
            {showDetails ? "Ocultar detalles" : "Ver detalles"}
          </button>
          {showDetails && (
           <section>
              <p id="storie">{data.storie}</p>
              <audio controls src={data.audio} type="audio/mp3"></audio>

           </section>
          ) 
          
              
           

            
          }

        </section>
      </section>
    
  );
}

export default CardDesign;
