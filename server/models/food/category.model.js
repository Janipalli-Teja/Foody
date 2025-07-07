import mongoose, { mongo } from "mongoose";

const categorySchema=new mongooseSchema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    availability:{
        type:String,
        enum:["available","unavailable"]
    }
})

export default mongoose.model("Category",categorySchema);