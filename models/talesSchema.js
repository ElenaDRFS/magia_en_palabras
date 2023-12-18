const mongoose = require('mongoose');

const talesDetailsSchema = {
    title: {
        type: String,
        unique: true

    },
    character: {
        type: String,
      
    },
    storie: {
        type: String,
       
    },
    image: {
        type: String, //sin validación que sino explota al recibir el string de firebase y que no finalice en .jpg
       
    },
    audio:{
        type:String   //tipo string porque lo que almacenará será la url donde esté guardado el firebase
    }
    
};

const taleSchema = mongoose.Schema(talesDetailsSchema);

const tales = mongoose.model('Tales', taleSchema);

module.exports = tales;