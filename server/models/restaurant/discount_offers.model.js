const mongoose=require('mongoose');
const discountSchema=new mongoose.Schema({
    title:{
        type:String,
        required,
    },
    type:{
        type:String,
        enum:["flat","percentage"]
    },
    discount_value:{
        type:Number,
        required:true,
    },
    valid_from:{
        type:Date,
        required:true,
    },
    valid_to:{
        type:Date,
        required:true,
    },
    applicable_to:{
        type:String,
        enum:["global", "restaurant", "category"]
    },
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    restaurant_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    }
},{timestamps:true});

const Discount= mongoose.model("Discount",discountSchema);

module.exports=Discount;