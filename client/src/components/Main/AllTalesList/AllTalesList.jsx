//muestra todos los cuentos y un botón de borrar que hace el axios delete

import React, {useState, useEffect} from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import AdminCard from "./AdminCard/AdminCard"


const AllTales = () => {
  const [allTales, setAllTales] = useState([]); //todos los cuentos bbdd

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

  const mapTales = () =>{
    return allTales.map(obj =>(
      <AdminCard key ={uuidv4()} data ={obj}/>
    ))
  }

  return <div>
    <Link to="/admin"><img src="./volver.png" alt="flecha" /></Link>

    {mapTales()}
  

   
    
    </div>
};

export default AllTales;
