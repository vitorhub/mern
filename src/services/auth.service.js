import User from "../models/User.js"    //ARQUIVO MODELO
import jwt  from "jsonwebtoken" // PACOTE

const loginService = (email) => User.findOne({ email: email }).select("+password");

const generateToken = (id) => jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 })

export { loginService, generateToken }