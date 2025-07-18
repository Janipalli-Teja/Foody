const mongoose=require('mongoose');

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

const Agent_Feedback = mongoose.model("Agent_Feedback",agentFeedbackSchema);

module.exports=Agent_Feedback;