import dotenv from 'dotenv'; dotenv.config();
import bcrypt from 'bcryptjs'
import { loginService, generateToken } from '../services/auth.service.js'

const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await loginService(email)
        if(!user){
            return res.status( 404 ).send( {message: "Errou senha ou user" } )
        }

        const passwordIsValid = bcrypt.compareSync( password , user.password )
        if( !passwordIsValid ){
            return res.status( 404 ).send( {message: "Errou senha ou user" } )
        }

        const token = generateToken( user.id )  // precisamos que o front end guarde a sessao, mandar o token

        res.send( { token } )
    } catch (err) {
        res.status(500).send(err.message)
    }

}

export { login }