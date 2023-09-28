const mongoose = require("mongoose");
const User = require("../models/userSchema")
const { encryptPassword, comparePassword } = require("../utils/passwordHandler")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getAllUsers = async (req, res) => {
const users = await User.find();
try {
    if(!users){
        return res.status(404).json({
            mensaje: "Usuarios no encontrados",
            status:404
        })
    }
    return res.status(200).json({
        mensaje: "Usuarios encontrados",
        status: 200,
        users
    })
} catch (error) {
    return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
      })
}
}

const getUserById = async (req, res) => {
    const {id} = req.params;
    const user = await User.findById(id); // debo validar que es un id creado por mongoose
    try {
        if(!mongoose.isValidObjectId(id)){ // verifica que el id corresponde a la base de datos
            return res.status(400).json({
                mensaje: "ID del usuario invalido",
                status: 400
            })
        }
        if(!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }

        return res.status(200).json({
            mensaje: "Usuario encontrado", 
            status:200,
            user
        })
    } catch (error) {
        return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
      })
    }
}

const register = async (req, res) => {
    // res.send({
    //     mensaje: "Con esta funcion registramos un usuario", 
    //     body: req.body
    // })
    const {nombre, username, password } = req.body;
    const user = await User.findOne({username}); // verifica si existe en la base de datos un user con ese username
    try {
        if(user) {
            return res.status(400).json({
                mensaje: "El usuario ya existe", 
                status: 400
            })
        }
        const newUser = new User({
            nombre,
            username, 
            password: encryptPassword(password)
        });
        await newUser.save(); // registro el usuario en la base, lo guardo
        res.status(201).json({
                mensaje: "Usuario creado correctamente",
                newUser
        })
    } catch (error) {
      // En el catch por lo gral lo que se manda es un error de server
      return res.status(500).json({
        mensaje: "Hubo un error, intentelo mas tarde", 
        status: 500
      })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    const secret = process.env.JWT_SECRET

    try {
        if(!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        if (!comparePassword(password, user.password)) {
            return res.status(400).json({
                mensaje: "La contraseña es incorrecta",
                status: 400
            })
        }
        const payload = { // no se comparten las contrasena ni se envian todos los datos
            sub: user._id,
            email: user.username,
            nombre: user.nombre,
            rol: user.rol
        }
        const token = jwt.sign(payload, secret, {algorithm: process.env.JWT_ALGORITHM, expiresIn: "1h"});
        return res.status(200).json({
            mensaje: "Inicio de sesión exitoso",
            status: 200, 
            token,
            // user puedo poner el user pero seria exponer todos los datos
        })
    } catch (error) {
        
    }
}

const changeToAdmin = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)

    try {
        if(!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado", 
                status: 404
            })
        }
        user.rol = "admin"
        await user.save();
        res.status(200).json({
            mensaje: "Usuario actualizado correctamente",
            status: 200,
            user
        })
        // user.rol = "admin" o

    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);

    try {
        if(!mongoose.isValidObjectId(id)){ // verifica que el id corresponde a la base de datos
            return res.status(400).json({
                mensaje: "ID del usuario invalido",
                status: 400
            })
        }
        if(!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Usuario borrado correctamente",
            status: 200,
            user
        })
    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombre , username, password} = req.body;
    try {
        if(!mongoose.isValidObjectId(id)){ // verifica que el id corresponde a la base de datos
            return res.status(400).json({
                mensaje: "ID del usuario invalido",
                status: 400
            })
        }
        if (req.body.password) {
            const user = await User.findByIdAndUpdate(id, {
            ...req.body,
            nombre,
            username,
            password: encryptPassword(password)
        }, {new:true}) // el new: true lo que hace es qur todo lo que hagamos del update lo guarde en la base y reemplace el usuario ya creado. que se reemplacen bien los datos.
        if(!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Usuario editado correctamente",
            status: 200,
            user // no es lo recomendable pasar el usuario
        })
        } 
        const user = await User.findByIdAndUpdate(id, {
            ...req.body,
            nombre,
            username,
        }, {new:true}) // el new: true lo que hace es qur todo lo que hagamos del update lo guarde en la base y reemplace el usuario ya creado. que se reemplacen bien los datos.
        if(!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        return res.status(200).json({
            mensaje: "Usuario editado correctamente",
            status: 200,
            user // no es lo recomendable pasar el usuario
        })
        

    } catch (error) {
        return res.status(500).json({
            mensaje: "Hubo un error, intentelo mas tarde",
            status: 500
        })
    }
}

module.exports = {
    getAllUsers, register, changeToAdmin, getUserById, deleteUser, login, updateUser
}