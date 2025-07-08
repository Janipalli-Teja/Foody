const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img_url:{
        type:String,
    },
    description:{
        type:String,
    },
    availability:{
        type:String,
        enum:["available","unavailable"]
    }
})
const Category=mongoose.model("Category",categorySchema);

module.exports=Category;