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
        default:"customer"
    },
},{timestamps:true})


const User= mongoose.model("User",userSchema);

module.exports=User;