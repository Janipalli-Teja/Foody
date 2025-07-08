import mongoose from "mongoose";

const customerFeedbackSchema=new mongoose.Schema({
    rating:{
        type:String,
        required:true,
    },
    feedback:{
        type:String,
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    agent_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Agent"
    },
},{timestamps:true});

const Customer_Agent_Feedback= mongoose.model("Customer_Agent_Feedback",customerFeedbackSchema);

module.exports=Customer_Agent_Feedback;