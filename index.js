require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
const dbConnection = require("./database/db");
const cloudinary = require("cloudinary").v2;
const passport = require("passport");
const jwtStrategy = require("./passport/jwt");

const app = express(); // devuelve objeto


// middlewares
app.use(cors());
app.options('*',cors()); // permitehacer solicitudes a todas las rutas
app.use(express.json());
app.use(express.urlencoded({extended: false})); // este se utiliza para analizar las solictudes entrantes con datos codificados en la url
app.use(morgan("dev"));

// passport
passport.use("jwt", jwtStrategy);

//cloudinary config
cloudinary.config({ // con esto cuando subamos una img
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.APY_KEY,
  api_secret:process.env.API_SECRET,
});


// configuracion rutas
app.use("/", router); // uso el middleware para encerrar todas las rutas


// console.log("app", app);

// Ya tengo creado mis primeros datos con express, necesito crear el servidor

// Puedo crear la ruta con la cual tendre un get

// app.get("/", (request, response) => {
//     response.send({
//         mensaje: "Hola a todos desde el back-end, se agrega el cambio pero no me termina de convencer"
//     })
// }) // PARAMETROS REQ Y RES

// app.post('/', (req, res) => {
//     const {nombre} = req.body;
//     console.log(req.body);
//     res.send({
//         nombre
//     })
// })

// app.put("/:id", (req, res) => {
//     const userId = req.params.id; // para editar un producto o borrarlo
//     console.log(userId);
//     res.send(userId);
// })


// tiro el servidor con ctrl+ c









// esto siempre va al ultimo

// puerto
// const port = 8080;
const port = process.env.PORT;
// conexion base de datos
dbConnection();

app.listen(port, () => {
    console.log("El servidor está funcionando en el puerto", port);
}) // recibe dos parametros, el primero el puerto y el segundo un callback

// inicializo el servidor con 'node' y la ruta de mi archivo

// el servidor ya está andando