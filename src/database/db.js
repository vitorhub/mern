import mongoose from 'mongoose' // biblioteca que facilita criação do bd e modelos
// const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log("espera conecção da database")

    mongoose.connect(   /* pede dois parametros  uri e options */
        process.env.MONGODB_URI,  // para variaveis de ambiente
        { useNewUrlParser: true, useUnifiedTopology: true }) // options necessarias para configuração da conecção
        .then(() => console.log('conectou atlas')) // then espera promessa de sucesso pois não sabe se vai dar certo
        .catch((error) => console.log(error)) // se der errado ele entra no catch da promisse sem sucesso
}
// mongoose.connect (uri e options)
// uri esta no connect do mongodb atlas

export default connectDatabase;