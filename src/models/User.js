import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({ // metodo Schema pertence a biblioteca mongoose
    // Schema para limitar como os documentos devem ser criados
    name: {
        type: String,
        required: true,     // verificando cada campo só que no banco de dados
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    background: {
        type: String,
        required: true,
    }
})

// para cript para senha   // npm i bcryptjs
UserSchema.pre("save", async function(next){  // função pre do mongoose antes salvar schema passa dois parametros
    this.password = await bcrypt.hash(this.password, 10)    // password do schema   thispasswrd STRING / 10 RODADAS
    next()
})   

const User = mongoose.model("User", UserSchema)  // User recebe model com nome User e Schema chamado UserSchema que foi criado acima

export default User