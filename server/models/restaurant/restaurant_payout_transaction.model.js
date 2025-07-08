const mongoose=require('mongoose');
const restaurantPayoutSchema=new mongoose.Schema({
    payout_amount:{
        type:String,
        required:true,
    },
    commission_amount:{
        type:String,
        required:true,
    },
    payout_status:{
        type:String,
        enum:["pending", "completed", "failed"],
    },
    transaction_reference:{
        type:String,
        required:true,
    },
    processed_at:{
        type:String,
        required:true,
    },
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant",
    },
    processed_admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Final_Order"
    }
})

const Restaurant_Payout= mongoose.model("Restaurant_Payout",restaurantPayoutSchema);

module.exports=Restaurant_Payout;