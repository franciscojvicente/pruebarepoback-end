const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    username : {
        type: String,
        require: true,
        trim: true
    },
    password : {
        type: String,
        require: true, // si esta en true el require, cuando quiera hacer un update del user, si no pongo el campo require, va a salir por el catch del update  
        trim: [true, "Tiene espacios"]
    },
    rol : {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    fechaRegistro: {
        // type: Date.now(), para guardar la fecha del dia
    }
    
    // podemos tener los datos que queramos
})

const User = mongoose.model("User", userSchema);
module.exports = User;