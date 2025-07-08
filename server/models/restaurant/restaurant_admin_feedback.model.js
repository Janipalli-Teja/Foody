import mongoose from "mongoose";

const restaurantFeedbackSchema=new mongoose.Schema({
    feedback:{
        type:String,
    },
    complaint:{
        type:String,
    },
    status:{
        type:String,
        enum:["pending","resolved"]
    },
    resolved_at:{
        type:Date,
    },
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
    handled_admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

const Restaurant_Feedback= mongoose.model("Restaurant_Feedback",restaurantFeedbackSchema);

module.exports=Restaurant_Feedback;