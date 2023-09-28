const passportJWT = require("passport-jwt");
const User = require("../models/userSchema");
require("dotenv").config();

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt; // sirve para extraer el token de una solicitud http

///////////////////// Configuración inicial para utilizar esta estrategia //////////////////////////////////////////

const config = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // extraigo desde 
    secretOrKey: process.env.JWT_SECRET,
    algorithms: process.env.JWT_ALGORITHM
};

const jwtStrategy = new JwtStrategy(config, async (payload, done) =>{ // sirve para
    try {
        const user = await User.findById(payload.sub); // payload es el contenido decodificado del jwt
        if(!user) {
            return done(null, false); // done es un callback. esto quiere decir que la autenticacion falló.
        }
        done(null, user); // autenticacion exitosa. Paso el user al siguiente middleware.
    } catch (error) {
        done(error, false);
    }
})

module.exports = jwtStrategy;