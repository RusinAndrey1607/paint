import { UserDto } from "../dtos/user.dto"
import { ApiError } from "../exceptions/api.error"
import { User } from "../models/models"
import bcrypt from "bcryptjs"
import { v4 } from 'uuid'
import { tokenService } from "./token.service"

class AuthService {
    async registration(email: string, password: string) {
        const candidate = await User.findOne({ where: { email } })

        if (candidate) {
            throw ApiError.BadRequest(`User with ${email} already exists`)
        }

        const hashPassword = await bcrypt.hash(password, 6)
        const activationLink = v4()
        const user = await User.create({ email, password: hashPassword, activationLink })

        const userDto = new UserDto(user)
        const tokens = await tokenService.generateTokens({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }

    }
}

export const authService = new AuthService()