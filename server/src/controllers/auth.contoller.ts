import { Request, Response } from "express"
import { authService } from "../services/auth.service"

class AuthController {
    async registration(req: Request, res: Response, next: Function) {
        try {
            const { email, password } = req.body

            const userData = await authService.registration(email, password)
            
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }
    async login(req: Request, res: Response, next: Function) {
    }
    async logout(req: Request, res: Response, next: Function) {
    }
    async refresh(req: Request, res: Response, next: Function) {
    }
}

export const authController = new AuthController()