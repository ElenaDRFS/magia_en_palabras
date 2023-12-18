import React,{ useState,useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";


const Form = () => {
  const storieRef = useRef(null); //usaremos el hook use ref para conseguir el texto del textarea. es como un get element by

  const [imgUrl, setImgUrl] = useState(""); //alamcena la URL de la iamgen cargada. est´guardada en esa variable por lo que se puede acceder a ella
  const [audioUrl, setAudioUrl] = useState(""); //alamcena la URL de la iamgen cargada. est´guardada en esa variable por lo que se puede acceder a ella
 
  const navigate = useNavigate();

    // FUNCIÓN PARA MANEJAR LA ASINCRONÍA DE SUBIR Y RECEPCIONAR DATOS. el problema que había era que se subían los datos mientras se leía el scritp y cuando llegaba a la parte de recibir el estado seguía vacío, porque el post se había ejecutado antes de que se seteara el estado, de esta manera, convirtiendo cada subida en una promesa y hacienod que se cumplan con el promise all, asegurameos que se ha seteado el estado y esos datos se reciben en post data
  const uploadFile = (storageRef, file) => {
    return new Promise((resolve, reject) => {
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        null,
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  //esta función enviará los datos del formulario a cloudstore, y al backend para recogerlos por req.body 
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const title = event.target.title.value;
    
    const character = event.target.character.value;

    const storieValue = storieRef.current.value;
    
    
    const img = event.target[3]?.files[0]; 
    //seleccionamos el fichero que haya en index 0, en este caso la imagen
    const audio = event.target[4]?.files[0]; //seleccionamos el fichero audio
   
    if (!img || !audio) return; //crucial para que se carguen los datos en el objeto a mandar, sin ella solo se setea el estado pero no se guarda en el objeto
  
    const storageImgRef = ref(storage, `files/${img.name}`);  //referencia a la ubicación de carpeta imágenes
   
    const storageAudioRef = ref(storage, `audiolibros/${audio.name}`); //referencia a la unicación de la carpeta audiolibros

    try {
        const [imgUrl, audioUrl] = await Promise.all([
          uploadFile(storageImgRef, img),
          uploadFile(storageAudioRef, audio),
        ]);

// construimos el objeto que vamos a mandar a mongo con los datos que hemos guardado en variables del form y las url de firebae storage
    const postData = {
      title:title,
      character:character,
      storie:storieValue,
      image:imgUrl,
      audio:audioUrl

    }
     console.log(postData)
   

      const response = await axios.post("http://localhost:3000/api/createTale", postData);
     
      // console.log('Respuesta del servidor:', response.data);
      
      Swal.fire({
        title: "¡Terminado!",
        text: "Acabas de crear un nuevo cuento",
        icon: "success"
      });

      navigate("/admin")

    }catch(error){
      console.error(error)
    }
  
  }
  
  return  <section>

    <Link to="/admin"><img src="./volver.png" alt="flecha" /></Link>
    <form className="creation-form" onSubmit={handleSubmit}>

      <legend>Rellena todos los campos para crear un nuevo cuento</legend>

      <label htmlFor="title">Título<input className="inputs"  type="text" name="title" required /></label>

      <label htmlFor="character">Personaje principal<input className="inputs"  type="text" name="character" required/></label>

      <textarea ref={storieRef} name="storie" id="storie" cols="30" rows="10" placeholder="Érase una vez..." required/><br />

      <input type="file" name="img" id="img" required/>

     <input type="file" name="audio" id="audio" required />     
    
    <button className="submit-button"type="submit">Crear</button>


  </form>
  </section> 
};

export default Form;