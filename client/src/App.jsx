import './App.css';
import {BrowserRouter} from "react-router-dom";
import { useState } from "react";
import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import SignUp from "./components/Main/SignUp";
import LogIn from "./components/Main/LogIn";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Main from './components/Main/Main';
import Form from './components/Main/CreationForm/Form';
import TaleCard from './components/Main/TaleList/TaleCard'

function App() {
  const [imgUrl, setImgUrl] = useState(null); //alamcena la URL de la iamgen cargada. est´guardada en esa variable por lo que se puede acceder a ella
  const [progresspercent, setProgresspercent] = useState(0); //porcentaje de carga 

const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0] //esta variable guarda el archivo subido

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);  //referencia a la ubicación de carpeta imágenes
    const storageAudioRef = ref(storage, `audiolibros/${file.name}`); //referencia a la unicación de la carpeta audiolibros

    const uploadTask = uploadBytesResumable(storageRef, file); //esta función es propia de firebase y maneja la carga del archivo a la vez que proporciona info sobre ella

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);  //muestra el porcentaje y además lo pone en un estado
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });  //esta es la función que devuelve la url subida
      }
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
      
      
      <Footer/>
      {/* <form onSubmit={handleSubmit} className='form'>
        <input type='file' />
        <button type='submit'>Upload</button>
      </form>
      {
        !imgUrl &&  //si todavía no está el estado con la url se muestra la barra de progreso
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrl && //si ya se ha seteado el estado con la url de la imagen entonces mostramos este p CAMBIAR POR SWEET ALERT
        <p>Se ha creado el nuevo cuento</p>
      } */}
    </div>
  );
}


export default App;

