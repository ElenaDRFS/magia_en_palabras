import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardDesign({data}) {
// desplegar detalles. usaremos un estado true/false para el condicional del return. Si show details es true, se enseñan los detalles, sino se esconden, además cambia el texto del botón
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card className='card-container' style={{ width: '18rem' }}>
      <Card.Img className='card-img' variant="top" src={data.image} />
      <Card.Body>
        <Card.Title className='card-title'>{data.title}</Card.Title>
     
        <Button variant="primary"className='card-button' onClick={toggleDetails}> {showDetails ? 'Ocultar detalles' : 'Ver detalles'}</Button>
        {showDetails && (
        <article>
          <h4>Historia:</h4>
          <p>{data.storie}</p>
          <audio controls src={data.audio} type="audio/mp3"></audio>
        </article>
      )}
      </Card.Body>
    </Card>
  );
}

export default CardDesign;