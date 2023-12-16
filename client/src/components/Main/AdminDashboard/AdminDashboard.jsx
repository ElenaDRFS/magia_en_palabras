import React from "react";
import { useNavigate} from "react-router-dom";

const Dashboard = () => {   
  const navigate = useNavigate();

  const handleCreate = () => {  
    navigate("/createTale");

  }

  const handleEdit = () => {  
    navigate("/editTale");

  }

  return <section>
    <h1>¿Qué quieres hacer hoy?</h1>
    <button type="button" className="submit-button" onClick={handleCreate}>Crear un nuevo cuento</button>
    
   
    <button type="button" className="submit-button" onClick={handleEdit}>Editar un cuento existente </button>
    
    </section>;
};

export default Dashboard;
