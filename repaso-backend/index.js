const express = require("express");

const app = express(); // con lo que vamos a trabajar para iniciar nuestro servidor

//middlewares
app.use(express.json()); // lo que hace es analizar solicitudes entrantes con formato json y convierte en datos js accesibles a partir del body
app.use(express.urlencoded({extended:false})); // lo que hace es analizar las solicitudes entrantes con datos codificados en la url y los convierte para que sean accesibles a traves del req.body. Extended false es una opcion que se configura como se acceden los datos a traves de la url. Dejarlo en false siempre!

//routes
app.get("/", (req, res) => {
    res.send("Nuestro servidor está funcionando, actualmente con la herramienta nodemon! ");
})

app.get("/usuario/:id", (req, res) => {
    const {id} = req.params;
    res.send(`Obteniendo informacion del usuario con el ID ${id}`)
})

app.post("/", (req, res) => {
    const {nombre, edad} = req.body;
    res.send(`Soy ${nombre}, tengo ${edad} años`);
})



// iniciar servidor
const port = 8081;
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
})