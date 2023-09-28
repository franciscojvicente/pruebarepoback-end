routing o direccionamiento
se refiere a como se gestionan las solicitudes http entrantes
fundamental para crear apps web para definir commo se deben manejar las distintas url o rutas en nuestra app

enroutamiento en express 
definimos rutas, get, post, put y delete.
parametros de ruta que pueden capturar valores variables de url
modular para dividir en modulos
manejo de errores usando middleware de manejo de errores

enrutamiento modular consiste en tener el codigo organizado y de este modo se puede dividir el enrutamiento en modulos separados

como modulamos? {
    creo una carpeta routes y adentro un archivo inde.js
}

controladores

funciones que manejan las solicitudes http entrantes

controladores independientes son mas faciles de probar de manera solitaria lo que facilita las pruebas unitarias

carpeta controllers y archivos nameController

controlador me reemplaza el callback

despues del controlador de registro no me anda

variables de entorno

pequeñas notas que usa la computadora usa para recorda rinformacion importante como configuraciones y datos sensibles, auidan a mantener apps seguras y flexibles

es como una variable comun y corriente pero se escribe de otra manera

archivos .env

archivos de conf que almacenan variables de entorno. ayuda a mantener contrasrnas y claves api fuera del codigo fuente

no incluir en repositorios publicos

carga de variables de entorno mediante una biblioteca Y EN UN ARCHIVO .env {
    npm install dotenv
}

BASES DE DATOS

sistemas diseñados para almacenar, gestionar grandes cantidades de informacion de manera eficiente y estructurada

base de dato en mondodb {
    voy al apartado database y aprieto build database
    elijo opcion no pago, dejo el cluster y la region, le pongo  el nombre y creo
    creo un usuario y contrasena
    habilito la opc de network access
    add ip adress
    allow access from anywhere


    creo la variable de entorno db_connection
    mongodb for vs code y copio la url pegando en la variable de entorno cambiando <username> por el usuario que cree arriba

}

podemos tener un archivo .example.env solo con el nombre de las variables y ese si puedo subirlo al repo

MONGOOSE es una biblioteca de js que proporciona una capa de abstraccion sobre mongodb. almacena datos en archivos json.

ofrece funcionalidades para usar querys de manera mas sencilla

npm install mongoose

luego creamos nuestra conexion a la base de datos

es la herramienta con la cual interactuamos con la base de datos

