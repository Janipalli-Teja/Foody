import mongoose from "mongoose";

const notificationSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    notification_type:{
        type:String,
        enum:["order_status", "offer", "reminder"],
    },
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
},{timestamps:true});

const Customer_Notication =  mongoose.model("Customer_Notication",notificationSchema);

module.exports=Customer_Notication;