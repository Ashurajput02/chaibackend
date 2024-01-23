import { DB_NAME } from "../constants.js"
import mongoose from "mongoose"



const connectDB= async () =>{
    try{

       const conectionInstace= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Connected successfully to the database:",conectionInstace.connection.host)

    }
    catch(error){
        console.log("Cannot connect to database:",error)
        process.exit(1)
    }
}

export default  connectDB