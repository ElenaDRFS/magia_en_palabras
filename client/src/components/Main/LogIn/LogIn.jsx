import React, {useState} from "react";
import { db } from '../../../firebase'
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate} from "react-router-dom";


const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const loadData = async () => {
    try{
    const users = await getDocs(collection(db, "users"));
    const userData = [];
    users.forEach((doc) => {      
      userData.push({id: doc.id, role: doc.data().role, email:doc.data().email})
    });
    return userData;
    } catch (error) {
      console.error(error.message);
    }


  }

  const compareEmail = async () =>{
   
    const data = await loadData();
    for(const index of data){
      if(index.email === email && index.role === 'admin'){
        navigate("/admin");
      }
      if(index.email === email && index.role === 'client'){
        navigate("/search");
        
      }
  }
  }
  
  const handleClick = async (e) => {
    e.preventDefault(); 
    await compareEmail();
     
 
  }
 

   

  return <form onSubmit={((e)=> handleClick(e))}> 
  <h1>Inicio de sesión</h1>
  <p>Introduce el email y contraseña con el que te registraste</p>
  <label htmlFor="email"><input type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}/></label> 
  <label htmlFor="password"><input type="text" placeholder="Contraseña" name="password"/></label> 
  <button type="submit">Empezar</button>
 
</form>;
};

export default LogIn;
