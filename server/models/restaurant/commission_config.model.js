import mongoose, { mongo } from "mongoose";

const commissionSchema=new mongoose.Schema({
    percentage:{
        type:String,
        required:true
    },
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    }
},{timestamps:true})

export default mongoose.model("Commission",commissionSchema);