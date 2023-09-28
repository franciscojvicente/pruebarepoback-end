const multer = require("multer");
const path = require("path"); // es un objeto de node que nos permite acceder a los archivos dentro de cualquier carpeta


module.exports = multer({
    // multer tiene varias partes
    storage: multer.diskStorage({}),  // donde quiero que se almacenen los datos que se estan guardando. (configura el almacenamiento para los archivos). (quiero que se guarden en el disco). Si esta vacio es la funcion por defecto. 
    fileFilter: (req, file, cb) => {
        console.log(file);
        const fileTypes = /jpeg|jpg|png/; // los archivos que permito subir
        const mimeType = fileTypes.test(file.mimetype);// verifica que el mime del archivo coincida con los types que estamos registrando arriba
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase()); // es la extension. sirve para verificar que la extension del nombre original del archivo coincide con los tipos de archivos permitidos

        if(mimeType && extname) { // compara que sean true el mimeType y el extname
            return cb(null, true); // reciben esos dos parametros, primero el error y segundo un booleano que me permite o no guardar la img
        }

        cb("Error: el tipo de archivo no está permitido -"+ fileTypes);
    } // cb es callback
    // Esto solo seria la config inicial. Solo resta configurar la ruta en la que lo vamos a utilizar
    // esto es multer
    // kmdskdmkdsmk
})