import mongoose from "mongoose";

const food_schema=mongoose.Schema({
    name:{
        type : String,
        required :true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img_url:{ 
        type:String,
        required:true
    },
    availability:{
        type:String,
        enum:["available","unavailable"]
    },
    restaurantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant",
        required:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }

},{timestamps:true});

const Food_Item= mongoose.model("Food_Item",food_schema);

module.exports=Food_Item;