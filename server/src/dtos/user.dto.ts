import { User } from "../models/models"

export class UserDto {
    email!: string
    id!: number
    constructor(model: User) {
        this.email = model.email
        this.id = model.id
    }
}