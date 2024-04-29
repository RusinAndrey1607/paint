import jwt from 'jsonwebtoken'
import { UserDto } from '../dtos/user.dto'
import { ApiError } from '../exceptions/api.error'

class TokenService {
    async generateTokens(payload: UserDto) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY || "secret", { expiresIn: "30m" })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY || "secret", { expiresIn: "1d" })

        return {
            accessToken, refreshToken
        }
    }
    async validateRefreshToken(refreshToken: string) {
        try {
            // @ts-ignore
            const data = await jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY)
            return data
        } catch (error) {
            console.log(error);    
            throw ApiError.UnauthorizedError("Token invalid")
        }
    }
    async validateAccessToken(accessToken: string) {
        try {
            // @ts-ignore
            const data = await jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY)
            return data
        } catch (error) {
            console.log(error);
            throw ApiError.UnauthorizedError("Token invalid")
        }
    }
}

export const tokenService = new TokenService()