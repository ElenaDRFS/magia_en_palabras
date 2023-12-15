import React from "react";
import { Link } from 'react-router-dom'

const Dashboard = () => {   


  return <section>
    <h1>¿Qué quieres hacer hoy?</h1>
    <button type="button" className="adminButton"><Link to='/createTale'>Crear nuevo cuento</Link></button>
    
   
    <button type="button" className="adminButton"> <Link to='/editTale'>Crear nuevo cuento</Link></button>
    
    </section>;
};

export default Dashboard;
