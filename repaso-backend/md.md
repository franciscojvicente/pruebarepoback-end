npm init -y
npm install express

{ es lo que primero se hace!
    const express = require("express");

const app = express(); // con lo que vamos a trabajar para iniciar nuestro servidor


app.listen(8081, () => {
    console.log(`Servidor funcionando en el puerto ${8081}`);
})
}

npm install nodemon -> herramienta que ayuda a los desarrolladores de node.js que hace que se reinicie cuando haya cambios

peticiones http son un conjunto de reglas protocolo usadas para la comunicacion entre cliente (web) y servidor