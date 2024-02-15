import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { storage } from '../../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";
import arrow from "/src/components/assets/img/volver.png";



const EditionForm = ({data}) => {
  const [allTales, setAllTales] = useState([]); //todos los cuentos bbdd

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
  const storieRef = useRef(null); 
  const [selectedTitle, setSelectedTitle] = useState("");
  
  const [imgUrl, setImgUrl] = useState(""); 
  const [audioUrl, setAudioUrl] = useState("");
 

  const navigate = useNavigate();

  const createOptions = () =>{
    return allTales.map((index, i)=>

    <option key={i} value={index.title}>{index.title}</option>
)}

// funcion para manejar la selección de cuento. lo guardamos en un estado que será el param para axios., así sabe que cuento actualizar

const handleSelectChange = (event) => {
 
  setSelectedTitle(event.target.value);

};

const handleSubmit = async (event) => {
    event.preventDefault();
        
    const character = event.target.character.value;

    const storieValue = storieRef.current.value;
    
    
    const img = event.target[3]?.files[0]; 
   
    const audio = event.target[4]?.files[0];
   
    if (!img || !audio) return; 

    const storageImgRef = ref(storage, `files/${img.name}`); 
   
    const storageAudioRef = ref(storage, `audiolibros/${audio.name}`); 

    const uploadImgTask = uploadBytesResumable(storageImgRef, img); 
    const uploadAudioTask = uploadBytesResumable(storageAudioRef, audio); 
  
    uploadImgTask.on("state_changed",
      null, 
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadImgTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });  
      }
    );
  
    uploadAudioTask.on("state_changed",
      null,
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadAudioTask.snapshot.ref).then((downloadURL) => {
          setAudioUrl(downloadURL)
        });  
      }
    );

// construimos el objeto que vamos a mandar a mongo con los datos que hemos guardado en variables del form y las url de firebae storage
    const updatedData = {
      title:selectedTitle,
      character:character,
      storie:storieValue,
      image:imgUrl,
      audio:audioUrl

    }
       
    try{

      const response = await axios.put(`/api/editTale/${selectedTitle}`, updatedData);
     
      // console.log('Respuesta del servidor:', response.data);
      
      Swal.fire({
        title: "¡Terminado!",
        text: `Has editado: ${selectedTitle}`,
        icon: "success"
      });

      navigate("/admin")

    }catch(error){
      console.error(error)
    }
  
  }

const handleDelete = async () => {
  try{

    const response = await axios.delete(`/api/deleteTale/${selectedTitle}`);
   
    
    
    Swal.fire({
      title: "¡Terminado!",
      text: `Has borrado: ${selectedTitle}`,
      icon: "success"
    });

    navigate("/admin")

  }catch(error){
    console.error(error)
  }

  
}

  return <section>

  <Link to="/admin"><img src={arrow} alt="flecha" /></Link>
  
  
  <form onSubmit={handleSubmit}>

    
      <legend>Aquí puedes editar o borrar los cuentos. Para ello, selecciona un título</legend>
      <label htmlFor="title">Título</label>

      <select name="title" id="title" onChange={handleSelectChange} > 
      <optgroup label="Título">
        <option value="*">Selecciona un título</option>
        {createOptions()}
        </optgroup>
      </select>

      <label htmlFor="character"><input placeholder="Personaje principal" className="inputs" type="text" name="character" required/></label>
      <textarea name="" id="" cols="30" rows="10" placeholder="Érase una vez..." ref={storieRef} required></textarea>
      <label htmlFor=""><input type="file" name="img" id="img" required/></label>
      <label htmlFor=""><input type="file" name="audio" id="audio" required/></label>
     <button className="submit-button" type="submit">Editar</button>
    
  </form>

  <button onClick={handleDelete} className="submit-button" type="submit">Borrar</button>

  </section>
};

export default EditionForm;