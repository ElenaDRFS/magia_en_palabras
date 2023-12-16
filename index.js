const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const morgan = require("./middlewares/morgan");
require('dotenv').config();
require("./config/mongoAtlasConnection"); //nos conectamos a Atlas

// const helmet = require('helmet');


const apiRoutes = require("./routes/api.routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan(":method :host :status :url :response-time ms :body"));
// app.use(
//     //fix de helmet para que se muestren las imagenes de las tarjetas
//     helmet.contentSecurityPolicy({
//       useDefaults: true,
//       directives: {
//         "img-src": ["'self'", "https: data:"],
//         "script-src": ["'self'", "https://cdn.jsdelivr.net"],
//         "frame-src": ["'self'", "https://www.youtube.com"]
//       },
//     })
//   );

//Rutas
// app.use("/", viewsRoutes);
app.use("/api", apiRoutes); //aquellas que interactuan con la bbdd

// Para rutas no existentes
app.use("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});


//* UNIÓN DE BACK Y FRONT PARA EL DESPLIEGUE
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
  
//   app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
// }

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
  
});
