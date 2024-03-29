import { Router } from 'express'
const router = Router()

import { create, findAll, topNews, findById, searchByTitle, byUser, update, erase, likeNews } from '../controllers/news.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js'

router.post("/", authMiddleware, create) // rota, controler chamado create
router.get("/", findAll) // rota, controler chamado getAll
router.get("/top", topNews)
router.get("/search", searchByTitle) // rota e função de callback.
router.get("byUser",  authMiddleware, byUser)
router.get("/:id", authMiddleware, findById) // rota e função de callback
router.patch("/:id", authMiddleware, update)
router.delete("/:id", authMiddleware, erase)
router.patch("/like/:id" , authMiddleware, likeNews)

export default router