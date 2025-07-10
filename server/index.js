const express =require('express');
const dotenv= require('dotenv');
const cors=require('cors');
dotenv.config();
const ConnectionDB=require('./db/connect.js');

// importing models
const Category =require( "./models/food/category.model.js");
const Restaurant=require("./models/restaurant/restaurant_profile.model.js");



// importing routes 
const homeRouter = require('./routes/cutomer/home.route.js');
const AgentRegistration=require('./routes/agent/agent.registration.route.js');
const RestaurantRegistration=require("./routes/restaurant/restaurant.registration.route.js")

const app=express();

//usage of middilewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


//mongo connection
ConnectionDB(process.env.MONGO_URI)
.then(()=>{
    console.log("mongoDb connected");
})
.catch((err)=>{
    console.log("error occured ",err);
})


//handling routes
app.use("/",homeRouter);
app.use("/agent-registration",AgentRegistration);
app.use("/restaurant-registration",RestaurantRegistration);

app.post("/add-category",async (req,res)=>{
    try{
        const { name , description , img_url ,availability } = req.body;
        if(!name || !description || !img_url || !availability){
            res.status(400).json({msg:"all fields are required"});
        }

        const category=new Category({name , description , img_url ,availability});
        await category.save();

        res.status(201).json({msg:"Category created"});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"unable to created category"});
    }
});

app.post("/add-restaurant",async (req,res)=>{
    try{
        const {name,address,license_number,logo_url,opens_at,closes_at,user_id} = req.body;

        if(!name  ||!address  ||!license_number  ||!logo_url  ||!opens_at  ||!closes_at  ||!user_id){
            res.status(400).json({msg:"field values are missing"});
    }
    const restaurant=new Restaurant({name,address,license_number,logo_url,opens_at,closes_at,user_id});
    await restaurant.save();
    res.status(201).json({msg:"restaurant created"});

    }catch(err){
        console.log(err);
        res.status(500).json({msg:"unable to create restaurant"});
    }
});



app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`);
}) 