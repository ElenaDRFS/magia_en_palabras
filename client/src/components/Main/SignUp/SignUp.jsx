
import React, { useState } from 'react';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate} from "react-router-dom"; //este hook para redirigir al terminar de registrarnos

import Swal from "sweetalert2";


const RegistrationForm = () => {
  //en 2 estados guardamos cada uno de los datos, se setea el estado cuando cambie el input. A medida que se escriba se irá seteando
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();  //evitamos recargo de página
    
    try {
    //  creamos nuevo usuario con ese metodo del auth de firestore
      await createUserWithEmailAndPassword(auth,email, password);
      // creamos nuevo usuario en database con los datos que lleguen por el formulario y añadimos el rol y el registered para luego comprobar si ya se está usando ese email
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        password: password,
        role: 'client',
        registered: true
      });
      

      Swal.fire({
        title: "¡Gracias!",
        text: "Ya has creado tu usuario,serás redirigido al Log in",
        icon: "success"
      });
      
      
      navigate("/login");

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleRegistration}>
      <h1>Registro</h1>
      <h3>Introduce un email y una contraseña.</h3>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <br />
      <label>
        Contraseña
        <input type="password" placeholder='Min. 8 caracteres y 1 número' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistrationForm; 
