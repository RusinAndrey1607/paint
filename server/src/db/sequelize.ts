import { Sequelize } from 'sequelize'
import { config } from "dotenv"
config()

export const sequelize = new Sequelize({
    dialect:'postgres',
    database:process.env.DB_DATABASE,
    host:process.env.DB_HOST,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port:Number(process.env.DB_PORT),
})

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log("Connect to db")
    } catch (error: any) {
        await sequelize.close()
        throw new Error(error)

    } 
}