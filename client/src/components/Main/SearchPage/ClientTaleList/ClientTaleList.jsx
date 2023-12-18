import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./TaleCard/TaleCard"
const ClientTaleList = ({results}) => {  
  const mapTales = () =>{
    return results.map(obj =>(
      <Card key ={uuidv4()} data ={obj}/>
    ))
  }

  
  return <section>
    <article>{mapTales()}</article>
    
  
  </section>;
};

export default ClientTaleList;
