const passport = require("passport");

const authenticateUser = (req, res, next) => {
    passport.authenticate("jwt",  (err, user, info) => { // "jwt" debe coincidir con lo que ponga en el index.js en passport

        if(err) {
            return res.status(500).json({
                mensaje: "Error al autenticar el user",
                error: err,
                status: 500
            })
        }
        if(!user) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado",
                status: 404
            })
        }
        req.user = user;
        next();
    }) (req, res, next) // autoejecuto con los mismos parametros
}

module.exports = authenticateUser;