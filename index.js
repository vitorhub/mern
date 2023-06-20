import express from 'express' // PACOTES importa todos pacotes instalados que estao no nodemodules
import dotenv from 'dotenv' // USAR PACOTE dotenv para variaveis de ambiente

import connectDatabase from './src/database/db.js'  // ? chama função de conecção do db

import userRoute from './src/routes/user.route.js' // para rota
import authRoute from './src/routes/auth.route.js' // para rota
import newsRoute from './src/routes/news.route.js' // para rota

dotenv.config() // para variaveis de ambiente

const app = express(); // app é padrao INSTANCIA DE EXPRESS

const port = process.env.PORT || 3000 /* de onde vem process.env.PORT */

connectDatabase()   // ? chama função de conecção do db
app.use(express.json()) // express passa a usar os formato json vindos do cliente
app.use('/user', userRoute); // middleware . quando acessa rota user USE todos metodos vindos de user route
app.use('/auth', authRoute);
app.use('/news', newsRoute);

// rota    (1)metodo http ex. get  (2)name=rota em si    (3)function callback

app.listen(port, () => console.log(`Rodando na ${port}`))