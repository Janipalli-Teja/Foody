import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    phone_number:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        enum:["customer","restaurant","agent","admin"],
        required:true
    },
    password_hash:{
        type:String,
        required:true,
    },
},{timestamps:true})


export default mongoose.model("User",userSchema);