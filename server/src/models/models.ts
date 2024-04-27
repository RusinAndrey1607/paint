import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/sequelize";

export class User extends Model {
    public id!: number
    public password!: string
    public email!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date

}
User.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, modelName: "User" })


export class Token extends Model {
    public refreshToken!: string
    public id!: number
    public user!: number

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date
}
Token.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    refreshToken: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    modelName: "Token"
})


User.hasOne(Token)
Token.belongsTo(User, { foreignKey: "user", onDelete: "cascade" })