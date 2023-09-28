const bcrypt = require("bcryptjs");
require("dotenv").config();

const encryptPassword = (password) => {
    // aca creo mi hash
    // hash sync toma la contrasena que le paso y con otro parametro que le paso (rondas: cantidad de encriptacion, numero aleatorio (2, 5, 20). tamaño del hash de la contraseña)
    const hash = bcrypt.hashSync(password, parseInt(process.env.ROUNDS));
    return hash
}

const comparePassword = (password, hash) => {
    const isValid = bcrypt.compareSync(password, hash); // esta funcion lo que hace es comparar las contrasenas, lo desencripta de forma interna y devuelve un bool
    return isValid;
}



module.exports = {
    encryptPassword,
    comparePassword
}

