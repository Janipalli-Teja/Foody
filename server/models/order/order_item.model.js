const mongoose=require('mongoose');
const orderItemSchema=new mongoose.Schema({
    food_item_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Food_Item",
    },
    quantity:{
        type:Number,
        required:true,
    },
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Final_Order"
    }
    
},{timestamps:true});

const Order_Item = mongoose.model("Order_Item",orderItemSchema);

module.exports=Order_Item;