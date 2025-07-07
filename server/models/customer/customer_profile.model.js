import mongoose, { mongo } from "mongoose";

const customerSchema=new mongoose.Schema({
    full_name:{
        type:String,
    },
    address:{
        type:String,
        required:true,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});


export default mongo.MongoDBCollectionNamespace("Customer",customerSchema);