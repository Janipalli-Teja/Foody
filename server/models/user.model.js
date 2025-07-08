const mongoose=require('mongoose');
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


const User= mongoose.model("User",userSchema);

module.exports=User;