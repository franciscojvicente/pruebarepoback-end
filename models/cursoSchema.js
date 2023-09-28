const mongoose = require("mongoose");
const Categoria = require("./categoriaSchema");

const cursoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    detalle: {
        type: String,
        require: true
    },
    video: {
        type: String,
        require: true
    },
    mentor: {
        type: String,
        require: true
    },
    img_mentor: {
        type: String,
        default: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"
    },
    categoria: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: Categoria,

    }

})

const Curso = mongoose.model("Curso", cursoSchema);

module.exports = Curso;