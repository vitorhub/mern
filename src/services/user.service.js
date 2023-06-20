import User from '../models/User.js'

const createService = (body) => User.create(body)
    // vai receber dados do body, User é o model Schema criado.
    // create é metodo do mongoose que cria o body. CRIA NO BD o modelo proposto pelo model schema
    // metdo do mongoose que cria um novo item no padrao schema

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => 
User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background}
)


export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
}
