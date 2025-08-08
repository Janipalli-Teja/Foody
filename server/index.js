const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config();

const ConnectionDB = require('./db/connect.js');
const allowedOrigins = ["http://localhost:5173"];

// importing routes 
const homeRouter = require('./routes/cutomer/home.route.js');
const AdminActions = require("./routes/admin/admin.actions.route.js");
const UserRouter = require("./routes/user.route.js");
const CustomerProfile = require("./routes/cutomer/customer.profile.route.js");
const ResturantRoutes = require("./routes/restaurant/restaurant.route.js");

//importing middilewares 
const verifyToken = require("./middlewares/auth.middleware.js")

const app = express();

// usage of middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// mongo connection
ConnectionDB(process.env.MONGO_URI)
  .then(() => console.log("mongoDb connected"))
  .catch((err) => console.log("error occurred ", err));



app.use("/home", homeRouter);
// app.use("/agent-registration", AgentRegistration);
app.use("/admin", AdminActions);
app.use("/user", UserRouter);
app.use("/customer", verifyToken, CustomerProfile);
app.use("/restaurant", verifyToken, ResturantRoutes);


app.get("/", verifyToken, (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ msg: "User not logged in" });
    }

    res.status(200).json({
      name: req.user.name,
      id: req.user._id,
    });
  } catch (err) {
    console.error("Session check failed:", err);
    res.status(400).json({ msg: "Session error" });
  }
})

// start server
app.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:${process.env.PORT}`);
});
