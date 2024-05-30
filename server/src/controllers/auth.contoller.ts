import { Request, Response } from "express"
import { authService } from "../services/auth.service"
import { validationResult } from "express-validator"
import { ApiError } from "../exceptions/api.error"

class AuthController {
    async registration(req: Request, res: Response, next: Function) {
        try {            
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest("Validation Failed", errors.array()))
            }
            const { email, password } = req.body

            const userData = await authService.registration(email, password)
            
            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }
    async login(req: Request, res: Response, next: Function) {
        try {
            const { email, password } = req.body
            const userData = await authService.login(email, password)

            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)

        } catch (error) {
            next(error)

        }

    }
    async logout(req: Request, res: Response, next: Function) {
        try {
            const { refreshToken } = req.cookies
            res.clearCookie("refreshToken")
            const token = await authService.logout(refreshToken)
            res.json(token)
        } catch (error) {
            next(error)

        }
    }
    async refresh(req: Request, res: Response, next: Function) {
        try {
            const { refreshToken } = req.cookies
            console.log(refreshToken);


            const userData = await authService.refresh(refreshToken)

            res.cookie("refreshToken", userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData)
        } catch (error) {
            next(error)

        }
    }
}

export const authController = new AuthController()