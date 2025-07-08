const mongoose=require('mongoose');
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

const Commission= mongoose.model("Commission",commissionSchema);

module.exports=Commission;