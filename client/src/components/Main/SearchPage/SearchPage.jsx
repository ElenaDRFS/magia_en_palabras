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

  useEffect(()=>{
    const getTalesByTitle = async () => {
      try{
        const response = await axios.get(`/api/titleTales/${title}`)
        
        setResults(response.data);

      }catch(error){
        console.log(error)
      }
    }
    getTalesByTitle();

  },[title]) //cuando cambie el title, del buscador se vuelve a lanzar la petición get


  useEffect(()=>{
    const getTalesByCharacter = async () => {
      try{
        const response = await axios.get(`/api/characterTales/${character}`)
     
        setResults(response.data);

      }catch(error){
        console.log(error)
      }
    }
    getTalesByCharacter();
  },[character]) 


  //siempre que se renderice el componente se lanza la petición, para la lista de todos los cuentos. siempre actualizado ya que la unica forma de modificar estos datos es desde el admin, con lo cual cuando se vuelva a esta vista, se habrá vuelto a actualizar


  useEffect(()=>{
    const getAllTales = async () => {
      try{
        const response = await axios.get("/api/tales")
        
        setAllTales(response.data);

      }catch(error){
        console.log(error)
      }
    }
    getAllTales();
  },[]) 

  return <section>
  
  <Search search={setTitle} press={setCharacter} info={allTales}/>
  <ClientTaleList results={results}/>

  </section>;
};

export default SearchPage;
