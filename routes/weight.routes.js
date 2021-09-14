import Router from "express"
import weightController from "../controllers/weight.controller.js"

const weightRouter = new Router()

weightRouter.post("/weight", weightController.create)
weightRouter.get("/weight", weightController.getAll)

export default weightRouter
