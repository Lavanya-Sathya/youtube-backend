// require('dotenv'.config({path:"./env"}))

// import dotenv from "dotenv/config"
import "dotenv/config"

import connectDB from "./db/index.js";

// dotenv.config({
//     path:"./env"
// })

connectDB()






















// (async()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(err)=>{
//             console.log("Error:",err);
//             throw err
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App listening on port ${process.env.PORT}`);
            
//         })
//     }catch(err){
//         console.error("Error connecting to DB",err)
//     }
// })()

