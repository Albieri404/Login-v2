import express from "express"
import { signup } from "../controllers/authController"
import identification from "../middlewares/identification"

const authRouter = express.Router()

authRouter.post('/signup', signup)

export default authRouter