import mongoose from 'mongoose'

const connectDatabase = () => {
    console.log("espera conecção da database")

    mongoose.connect(
        process.env.MONGODB_URI,  // para variaveis de ambiente
        { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('conectou atlas'))
            .catch((error) => console.log(error))
}

export default connectDatabase;