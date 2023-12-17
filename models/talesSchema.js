const mongoose = require('mongoose');

const talesDetailsSchema = {
    title: {
        type: String,
        required: true,
        unique: true

    },
    character: {
        type: String,
        required: true
    },
    storie: {
        type: String,
        required: true
    },
    image: {
        type: String,
        validate: {
            validator: function(url){
                return url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.jpeg');
            },
            message: "Por favor, solo imágenes JPG, PNG o JPEG"
        }
    },
    audio:{
        type:String   //tipo string porque lo que almacenará será la url donde esté guardado el firebase
    }
    
};

const taleSchema = mongoose.Schema(talesDetailsSchema);

const tales = mongoose.model('Tales', taleSchema);

module.exports = tales;