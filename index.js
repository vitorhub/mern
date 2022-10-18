import express from 'express' // importa todos pacotes instalados que estao no nodemodules
import connectDatabase from './src/database/db.js'  // ????
import dotenv from 'dotenv' // para variaveis de ambiente

import userRoute from './src/routes/user.route.js' // para rota
import authRoute from './src/routes/auth.route.js' // para rota
import newsRoute from './src/routes/news.route.js' // para rota


dotenv.config() // para variaveis de ambiente

const app = express(); // app é padrao
const port = process.env.PORT || 3000

connectDatabase()
app.use(express.json())
app.use('/user', userRoute); // middleware
app.use('/auth', authRoute);
app.use('/news', newsRoute);

// rota    (1)metodo http ex. get  (2)name=rota em si    (3)function callback

app.listen(port, () => console.log(`Rodando na ${port}`))