const mongoose=require('mongoose');

const customerSchema=new mongoose.Schema({
    address:{
        type:String,
        required:true,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

const Customer= mongoose.model("Customer",customerSchema);

module.exports=Customer;