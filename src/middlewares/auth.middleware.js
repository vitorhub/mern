import dotenv from 'dotenv'
import userService from '../services/user.service.js'
import jwt  from "jsonwebtoken"
dotenv.config()

export const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers

        if( !authorization ){
                return res.sendStatus(401)
            }
            const parts = authorization.split(" ")
            if( parts.length !== 2){
                return res.sendStatus( 401 , "Nao ha dois valores" )
            }
            const [ schema, token ] = parts
    
            if (schema !== "Bearer"){
                return res.send( 401, "Bearer errado" )
             }
        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded)=>{
            if(error){
                return res.send( 401 , "TOKEN ERRADO L:22")
            }
            const user = await userService.findByIdService(decoded.id)
            if (!user || !user.id){
                return res.status(401).send({ message: "Invalid token"})
            }
            req.userId = user.id
            return next()
        } )   // função recebe    TOKEN    SECRET KEY   OPTIONS
    
    } catch (err) {
        res.status(500).send(err.message, "AQUI")
    }
}