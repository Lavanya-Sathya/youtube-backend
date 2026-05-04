// require('dotenv'.config({path:"./env"}))

// import dotenv from "dotenv/config"
import "dotenv/config";

import connectDB from "./db/index.js";

// dotenv.config({
//     path:"./env"
// })

connectDB()
  .then(() => {
    // app.on(err)
    // app.listen(process.env.PORT || 8000, () => {
    //   console.log(`Server is running at port ${process.env.PORT}`);
    // });
  })
  .catch((err) => {
    console.log("Mongodb connection failed:", err);
  });

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
