import mongoose from "mongoose";

const customerFeedbackSchema=new mongooseSchema({
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
    customer_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    handled_admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

const Customer_Admin_Feedback=mongoose.model("Customer_Admin_Feedback",customerFeedbackSchema);

module.exports=Customer_Admin_Feedback;