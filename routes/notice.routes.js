import Router from "express"
import noticeController from "../controllers/notice.controller.js"

const noticeRouter = new Router()

noticeRouter.post("/notice", noticeController.create)
noticeRouter.get("/notice", noticeController.get)

export default noticeRouter
