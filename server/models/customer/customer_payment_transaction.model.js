import mongoose from "mongoose";

const transactionSchema=new mongoose.Schema({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Final_Order"
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    amount:{
        type:String,
        required:true
    },
    payment_type:{
        type:String,
        enum:["cod","upi","card"]
    },
    payment_status:{
        type:String,
        enum:["completed", "pending", "failed"]
    },
    transaction_reference:{
        type:String,
        required:true,
    }

},{timestamps:true});


export default mongoose.model("Cutomer_Payment",transactionSchema);