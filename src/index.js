//require('dotenv').config({path:'./env'})
//but aise likhne se yeh import aur require kaafi incocnsistent saa lagra hai hai naa so to tackle that we have 
import dotenv from "dotenv"
//import mongoose from "mongoose"
//import { DB_NAME } from "./constants";
//import express from "express";
import connectDB from "./database/index.js"

//bhaut recently add kiya gya hai 
dotenv.config({
    path: "./.env",
})

connectDB()

// function connectDB(){}

// connectDB()

//iss code mein koi kami nahi hai lekin iss approach ko behtar banaya jaa sakta hai 

//apan kya kar rhe honge ki iss function ko within declaration hi call kara lenge 

// const app=express()
// ;(async () =>{
//     try{
//  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//   //yeh hogya database connect
// //await isliye lagaya kyonki database is in another continent    

// app.on("error",(error) =>{
//     console.log("ERROR:",error);
//     throw error
// })
// app.listen(process.env.PORT,() =>{
//     console.log(`Server running on port ${process.env.PORT}`)});




// }
//     catch(error){
// console.error("ERROR:",error)
// throw err
//     }
// })() //idhar ; is  a professional practicse


//APPROACH2 OF CREATING A DIFFERENT MODULE


