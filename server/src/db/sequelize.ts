import { Sequelize } from 'sequelize'
import { config } from "dotenv"
import { User,Token } from '../models/models'
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
        await sequelize.authenticate({
            logging:false
        })
        await sequelize.sync({
            alter:true,
            logging:false
        })
        console.log("Connect to db")
    } catch (error: any) {
        await sequelize.close()
        throw new Error(error)

    } 
}