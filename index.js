const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const port = 3000;
const morgan = require("./middlewares/morgan");
const cors = require("cors");

require("./config/mongoAtlasConnection"); //nos conectamos a Atlas


const apiRoutes = require("./routes/api.routes");
const clientRoutes = require("./routes/client.routes");

// habilitamos la lectura y recepción de jsons(sino no e reciben los datos del body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use(morgan(":method :host :status :url :response-time ms :body"));


//Rutas
app.use("/api", apiRoutes); // rutas con peticiones http ADMIN
app.use("/api", clientRoutes); //rutas con las peticiones http CLIENT

// Para rutas no existentes
// app.use("*", (req, res) => {
//   res.status(404).json({
//     message: "route not found",
//   });
// });

//* UNIÓN DE BACK Y FRONT PARA EL DESPLIEGUE
if (process.env.NODE_ENV === 'production') {
  //*Set static folder
  app.use(express.static('client/dist'));
  
  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'dist','index.html')));
}

//para rutas no existentes
app.use('*',error404)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});
