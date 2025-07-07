const express =require('express');
const dotenv= require('dotenv');
dotenv.config();
const ConnectionDB=require('./db/connect.js')


const app=express();


//mongo connection
ConnectionDB(process.env.MONGO_URI)
.then(()=>{
    console.log("mongoDb connected");
})
.catch((err)=>{
    console.log("error occured ",err);
})



app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`);
}) 