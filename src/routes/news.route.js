import { Router } from 'express'
const router = Router()

import { create, findAll, topNews, findById, searchByTitle } from '../controllers/news.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

router.post("/", authMiddleware, create) // rota, controler chamado create
router.get("/", findAll) // rota, controler chamado getAll
router.get("/top", topNews)
router.get("/search", searchByTitle) // rota e função de callback
router.get("/:id", authMiddleware, findById) // rota e função de callback

export default router