const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    phone_number:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        enum:["customer","restaurant","agent","admin"],
        required:true,
        default:"cutomer"
    },
    password_hash:{
        type:String,
        required:true,
    },
},{timestamps:true})


const User= mongoose.model("User",userSchema);

module.exports=User;