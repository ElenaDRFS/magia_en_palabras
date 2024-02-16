// componente que hará 3 peticiones y renderizará los otros componentes hijo

import React, {useState, useEffect} from "react";
import axios from "axios";
import Search from "./Search/Search"
import ClientTaleList from "./ClientTaleList/ClientTaleList"



const SearchPage = () => {

  // SEARCH SETEA TITLE, CHARACTER
  //CLIENTLIST RECIBE RESULTS Y PINTA TARJETAS

  const [title, setTitle] =  useState(""); // guardamos el título seteado por el buscador, así al cambiar activa el get,además se usa para lanzar la petición. 
  const [character, setCharacter] =  useState(""); // lo mismo con los personajes
  const [allTales, setAllTales] = useState([]); //todos los cuentos bbdd

  const [results, setResults] = useState([]) //guardamos resultados de las búsquedas, lo pasaremos por props para pintarlos


  // primer use effect para conseguir todos los datos de los cuentos, con ellos, los pasamos al componente search que crea los botones. Al clicar los botones, se guarda su valor, se modifica el estado en search page y se lanza el use effect condicionado por ese parámetro

  
  useEffect(()=>{
    const getAllTales = async () => {
      try{
        const response = await axios.get("http://localhost:3000/api/tales")
        
        setAllTales(response.data);

      }catch(error){
        console.log(error)
      }
    }
    getAllTales();
  },[]) 

  useEffect(()=>{
    // le añadimos el condicionante para que solo lance la petición cuando haya algún valor en el estado, sin ello, al renderizar el componente lanza la petición y crashea. de esta forma, se esperaráa que haya un valor en ese estado para lanzar el use effect
    if(title){
      const getTalesByTitle = async () => {
     
        try{
          const response = await axios.get(`http://localhost:3000/api/titleTales/${title}`)
          
          setResults(response.data);
  
        }catch(error){
          console.log(error)
        }
      }
      getTalesByTitle();

    }
    

  },[title]) //cuando cambie el title, del buscador se vuelve a lanzar la petición get


  useEffect(()=>{
    if(character){
      const getTalesByCharacter = async () => {
        try{
          const response = await axios.get(`http://localhost:3000/api/characterTales/${character}`)
       
          setResults(response.data);
  
        }catch(error){
          console.log(error)
        }
      }
      getTalesByCharacter();
    }
    
  },[character]) 



 

  return <section>
  
  <Search search={setTitle} press={setCharacter} info={allTales}/>
  <ClientTaleList results={results}/>

  </section>;
};

export default SearchPage;
