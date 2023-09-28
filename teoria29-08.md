Modulo perteneciente a back-end

MERN. (que tipo de stack sabemos usar) vemos herramientas para trabajar el front-end y back-end 

stack de herramientas visto es MERN 

M (mongo db) E (framework a usar en el back-end (express)) R (react) N (node (lo que usamos es el npm que nos ayudaba a instalar dependencias)js)

js es un lenguaje de programacion que es interpretado por los navegadores

usuario no necesita ninguna app instalada solo necesita el navegador que trae lo necesario para interpretar js

js se usa del lado del front, no se puede ejecutar en el back-end

Mongodb es un motor de base de datos noSQL

transformo js, lo transformo para poder usarlo de parte del back-end. asi nace node.js que es la version que se puede ejecutar en un front-end

no es exactamente igual js a node.js. no todo lo que tiene js lo tiene node.

nodejs es el lenguaje a utlizar para el back-end

Nuestro stack se llama mern (siglas de funcionalidades, herramientas y frameworks a usar para crear nuestro proyecto)

GET es la peticion que pide el estado de productos.

Desde el lado del front no se lo que pasa desde el lado del back

el front solo se tiene que enterar a que ruta va a enviar la peticion y como va a ser la respuesta

del lado del back en algun momento llegará una peticion del lado del front

POST es la peticion para agregar productos en mi base de datos.

Si pude agregar le envio una respuesta, y sino tambien

Las peticiones son GET, POST, PUT y DELETE

El back-end se basa en node. 

Servidor no tiene instalado mongodb pero si nodejs, tengo que buscar servidores de base de datos y esta va a ser la estructura a usar

Back subido en un servidor que tenga nodejs (netlify no tiene). 

Servidor es como una maquina virtual que tendra mi back-end y lo mantendrá activo

Cuando alguien me pide una lista de productos hago una logica para buscar lo que me pida

Del lado del back nos encargamos como funciona el movimiento de datos de un lado a otro

Lo unico a tener en cuenta es que ahora recibimos peticiones y debemos hacer una logica para recibir la peticion y enviarla una respuesta al front

Herramientas

Node.js entorno de ejecucion de js del lado del servidor

Permite ejecutar codigo js en el servidor.

Se utiliza para construir apps de red y servidores en tiempo real, ideal para construir apps de alto rendimiento por su programacion asincrona, para apis y servicios web, permite construirlos tambien

Adecuado para apps en tiempo real, por ej, chat en linea, juegos en tiempo real, microservicios (construir y desplagar) para formar apps mas grandes

Automatizacion de tareas.

Como funciona?

Utiliza modelo de entrada y salida asincrona y no bloqueantes. Delega operaciones y continua ejecutando otras tareas. Utiliza un eventLoop (bucle de eventos). Utiliza bibliotecas y modulos para tareas especificas

Express.js

Proporciona un conjunto de caract. para crear una infraestructura web rápida. Framework de apps web para node.js

Facilita la creacion de apps web y apis. Respuestas http de manera efectiva.

Para que se utiliza? 

Para construir variedad de apps web y servicios. Aplicaciones de pagina unica, microservicios que se integran en una arquitectura de microservicios mas grandes. Apps en tiempo real combinandose con bibliotecas como socket

Como funciona?

Configuracion, instalamos a traves de npm, se crea instancia de la funcion express, defincion de rutas con los metodos arriba descriptos.

Que es un servidor?

computadora o programa que proporciona servicios a un cliente (otra computadora)

Como iniciar?

Para crear un proyecto de node npm init -y para hacerlo mas rapido

Ahora instalamos express 'npm install express'

El primer archivo se puede llamar app.js o index.js

Vamos a trabajar con la importacion por require

Peticiones http. Son solicitudes de un cliente (navegador) a un servidor para obtener informacion o realizar accion en la web

Como funcionan?

Dos partes, el cliente y el servidor

Cliente (navegador), servidor (computadora remota)

URL, metodos http (accion a realizar en el servidor)

GET solicita recurso

POST envia info

PUT actualiza recurso en el servidor

DELETE elimina recurso en el servidor

El cliente envia la solicitud http al servidor usando la url y el metodo adecuado, el servidor la recibe y la procesa y segun el metodo realiza acciones.

Como funciona?

Tres partes: 

- Linea de solicitud: incluye el metodo, la url y la version de http a utilizar
- Encabezado: informacion adicional sobre la solcitud. credenciales, tipo de datos a aceptar, etc
- Cuerpo/Request Body: cuerpo que contiene los datos que se envian al servidor en las peticiones post, put o delete.

Una vez que se envia, el servidor envia una respuesta.

La peticion es http porque a traves de una url se formula una solicitud.

con postman simulo formularios, envios de body.

nodemon cierro la terminal con la X, no con el tacho de basura.

BASE PARA UN SERVIDOR {

const express = require("express");

const app = express(); // devuelve objeto

console.log("app", app);

// Ya tengo creado mis primeros datos con express, necesito crear el servidor

// esto siempre va al ultimo
const port = 8080;

app.listen(port, () => {
    console.log("El servidor está funcionando en el puerto", port);
}) // recibe dos parametros, el primero el puerto y el segundo un callback

// inicializo el servidor con 'node' y la ruta de mi archivo

// el servidor ya está andando

}

Que son los codigos http?

200 es codigo exito
201 se usa para indicar que se creo un nuevo recurso. Pir ej. envio de form
204 solicitud buena pero no hay contenido para mostrar

301 recurso se ha movido a otra ubicacion, cliente debe mover
302 recurso se ha movido temporalmente
304 recurso no ha sido cambiado desde la ultima vez que se solicito

400 son los de error

401 cleinte debe autenticarse para acceder al recurso
403 cliente no tiene permiso
404 el recurso solicitado no se encuentra en el servidor

500 errores del servidor

API y API rest

diferencias

una api solo la puedo usar para traer informacion (solo uso el GET)
api rest tiene toda la parte de lo que seria el crud completo

Como funciona?

Obtener tareas (solicitud get al recurso task)
Agregar Tarea (solicitud post)
Actualizar tarea (solicitud put con info en el cuerpo)

Middlewares

Son una parte esencial, intermediarios que pueden tomar algo antes de que llegue a su destino final y hacer algo con ellos.

Para que se utilizan?

Ofrecer tareas entre la solicitud del cliente y la respuesta del servidor.

DETALLAR

Como funcionan?



CORS

Ayuda a evitar que una pagina web en un dominio pueda acceder a recursos como datos o imagenes en otro dominio sin permiso

Tenemos el origen y destino (origen: combinacion de protocolo http, dominio y puerto)

Si una pagina web intenta acceder a otro dominio se llama solicitud de origen cruzado

Como instalar y configurar CORS {

}

morgan es un middleware. que es lo que hace, cuando realizo una peticion http me muestra por consola el tipo de peticion y el msj de error