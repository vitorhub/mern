import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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

const User = mongoose.model("User", UserSchema)

export default User