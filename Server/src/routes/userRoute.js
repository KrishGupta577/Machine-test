import express from "express";
import { userLogin, userRegistration } from "../controllers/userController.js";

const userRoutes = express.Router()

userRoutes.post('/register',userRegistration)
userRoutes.post('/login',userLogin)

export default userRoutes