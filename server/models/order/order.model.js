import mongoose from "mongoose";

const FinalOrderSchema=new mongoose.Schema({
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"        
    },
    delivery_agent_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Agent"
    },
    payment_type:{
        type:String,
        enum:["cod","upi","card"],
    },
    payment_status:{
        type:String,
        enum:["completed","pending"],
    },
    total_amount:{
        type:String,
        required:true,
    }
},{timestamps:true});


export default mongoose.model("Final_Order",FinalOrderSchema);