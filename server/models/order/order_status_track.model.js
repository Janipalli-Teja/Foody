import mongoose, { mongo } from "mongoose";

const orderStatusSchema=new mongoose.Schema({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Final_Order",
    },
    agent_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Agent"
    },
    status:{
        type:String,
        enum:["Placed order","ontheway","arrived","delivered"]
    },
    updated_by:{
        type:String,
        required:true
    }
},{timestamps:true});

export default mongoose.model("Order_Status",orderStatusSchema);
