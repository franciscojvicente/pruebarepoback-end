bcrypt es una herramienta para encriptar contrasenas

instalamos la libreria bcryptjs para encriptarla

una vez encriptada no se puede desencriptar, por eso, para recuparar contrasena la cambiamos

npm install bcryptjs

crear aparte la funcionalidad para encriptar y etc

spinner o loader cuando utilizar?

cuando hacemos un request a una base de datos demora un tiempo en obtener la respuesta, entonces, podemos tener un loader (de una libreria) hasta que me traiga esa respuesta

tokens, jwt (json web token) : es una forma de representar informacion estructurada en un formato seguro y compacto, parecido a la encriptacion

son usados para autenticar un usuario y transmitir datos entre el cliente y el server

jwt.io pagina

primera parte es un header (lo que hace es tener un tipo de algoritmo para obtener un token)

segunda parte es un payload (contiene data)

tercera parte es una firma que tiene (esta firma lo que hace es indicarle que el token va a ser unico)

libreria a usar es: npm install jsonwebtoken porque tiene los dos algoritmos que mas se usan (hs256)