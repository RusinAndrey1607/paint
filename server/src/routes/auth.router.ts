import { Router } from "express";
import { authController } from "../controllers/auth.contoller";
import { check } from "express-validator";

export const authRouter = Router()
authRouter.post("/registration", [
    check("email").isEmail(),
    check("password")
        .isLength({ min: 5, max: 32 })
        .withMessage("Password must contain at least 5 chars and cannot be longer than 32")],
    authController.registration)
authRouter.post("/login", authController.login)
authRouter.post("/logout", authController.logout)
// authRouter.get("/", authController.getAll)
