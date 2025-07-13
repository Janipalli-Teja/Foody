const express =require('express');
const dotenv= require('dotenv');
const cors=require('cors');
dotenv.config();
const ConnectionDB=require('./db/connect.js');


// importing routes 
const homeRouter = require('./routes/cutomer/home.route.js');
const AgentRegistration=require('./routes/agent/agent.registration.route.js');
const RestaurantRegistration=require("./routes/restaurant/restaurant.registration.route.js");
const AdminActions=require("./routes/admin/admin.actions.route.js");

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
app.use("/home",homeRouter);
app.use("/agent-registration",AgentRegistration);
app.use("/restaurant-registration",RestaurantRegistration);
app.use("/admin",AdminActions);


app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`);
}) 