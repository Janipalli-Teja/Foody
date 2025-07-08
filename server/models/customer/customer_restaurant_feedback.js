import mongoose from "mongoose";

const customerfeedbackSchema=new mongoose.Schema({
    rating:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true 
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
},{timestamps:true});

const Customer_Restaurant_Feedback = mongoose.model("Customer_Restaurant_Feedback",customerfeedbackSchema);

module.exports=Customer_Restaurant_Feedback;