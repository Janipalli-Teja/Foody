const mongoose=require('mongoose');
const agentSchema=new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    vehicle_number:{
        type:String,
        required:true,
    },
    availability:{
        type:String,
        enum:["available","unavailable"],
        required: true,
        default: "unavailable"
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
},{timestamps:true});

const Agent= mongoose.model("Agent",agentSchema);

module.exports=Agent;