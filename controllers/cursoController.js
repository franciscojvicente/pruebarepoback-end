const Curso = require("../models/cursoSchema");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

const getAllCourses =  async (req, res) => {
    const cursos = await Curso.find().populate("categoria"); // para que muestre la categoria a la que hace referencia el id que le estoy pasando al usar el metodo post
    try {
        if(!cursos) {
            return res.status(404).json({
                mensaje: "Cursos no encontrados",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Cursos encontrados",
            status: 200,
            cursos
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const getCourseById = async (req, res) => { // ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
    const {id} = req.params;
    const curso = await Curso.findById(id); // debo validar que es un id creado por mongoose
    try {
        if(!mongoose.isValidObjectId(id)){ // verifica que el id corresponde a la base de datos
            return res.status(400).json({
                mensaje: "ID del curso invalido",
                status: 400
            })
        }
        if(!curso) {
            return res.status(404).json({
                mensaje: "Curso no encontrado",
                status: 404
            })
        }

        return res.status(200).json({
            mensaje: "Curso encontrado", 
            status:200,
            curso
        })
    } catch (error) {
        return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
      })
    }
}
const createCourse = async (req, res) => {
    // const { title, img , detalle, video, mentor, img_mentor, categoria } = req.body;
    const { title, detalle, video, mentor, img_mentor, categoria } = req.body;
    const {path} = req.file;
    // console.log(req.file); para ver como viene la imagen
    // puede ser distinto porque tenemos manejo de imagenes. Si mandamos imagenes hacemos lo sig. sino mandamos img arriba
    const curso = await Curso.findOne({title});
    const cloudImg = await  cloudinary.uploader.upload(path);

    try {
        if(curso) {
            return res.status(400).json({
                mensaje: "Curso existente",
                status: 400
            })
        }
        const newCourse = new Curso({
            title,
            imagen: cloudImg.secure_url, 
            detalle, 
            video, 
            mentor, 
            img_mentor, 
            categoria
            // o paso solamente req.body y arriba req.body.title
        });
        await newCourse.save();
        return res.status(201).json({
            mensaje: "Curso creado correctamente",
            status: 201,
            newCourse
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, imagen, detalle, video, mentor, img_mentor, categoria } = req.body;

    try {
        const curso = await Curso.findByIdAndUpdate(id, req.body, {new: true});

        if(!curso) {
            return res.status(404).json({
                mensaje: "Curso no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Curso modificado correctamente",
            status: 200,
            curso
        });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500,
            error
        })
    }
}

const deleteCourse = async (req, res) => {
    const {id} = req.params;
    const curso = await Curso.findByIdAndDelete(id);

    try {
        if(!mongoose.isValidObjectId(id)){ // verifica que el id corresponde a la base de datos
            return res.status(400).json({
                mensaje: "ID del curso invalido",
                status: 400
            })
        }
        if(!curso) {
            return res.status(404).json({
                mensaje: "Curso no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Curso borrado correctamente",
            status: 200,
            curso
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500,
            error
        })
    }
}


module.exports = {
    getAllCourses,
    createCourse,
    getCourseById,
    deleteCourse,
    updateCourse
}