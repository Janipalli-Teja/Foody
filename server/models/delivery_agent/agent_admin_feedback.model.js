import mongoose from "mongoose";

const agentFeedbackSchema=new mongoose.Schema({
    feedback:{
        type:String,
    },
    complaint:{
        type:String,
    },
    status:{
        type:String,
        enum:["pending","resolved"]
    },
    resolved_at:{
        type:Date,
    },
    agent_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Agent"
    },
    handled_admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true});

export default mongoose.model("Agent_Feedback",agentFeedbackSchema);