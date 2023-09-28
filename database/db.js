const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            dbName:"Comision49i",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de Datos conectada");
    } catch (error) {
        console.log(error);
        process.exit(1) // cuando hay alguna falla detiene el proceso, la corta a la ejecucion
    }
}

// agrego funcionalidades
//vdjvdjsjnasksa

module.exports = dbConnection;