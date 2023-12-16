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
 
  const handleSignUp = () => {  
    navigate("/signup");

  }
   

  return <section>
  <form className="login-form"onSubmit={((e)=> handleClick(e))}> 
      <h1>Inicio de sesión</h1>
      <p>Introduce el email y contraseña con el que te registraste</p>
      <label htmlFor="email"><input  className="inputs" type="text" placeholder="Email" name="email"  onChange={(e) => setEmail(e.target.value)} autofocus/></label> 
      <label htmlFor="password"><input className="inputs" type="text" placeholder="Contraseña" name="password"/></label> 
      <button className="submit-button"type="submit">Empezar</button>
 
 
</form>;
 <button className="normal-button" onClick={handleSignUp}>Registrar</button>
 </section>
};

export default LogIn;
