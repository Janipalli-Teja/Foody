const express = require('express');

const homeRouter = express.Router();

// importing models
const Category = require("../../models/food/category.model.js");
const Restaurant = require("../../models/restaurant/restaurant_profile.model.js");

homeRouter.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        const restaurants = await Restaurant.find({ approval_status: "accepted" });
        res.status(200).json({
            "success": true,
            categories,
            restaurants
        });
    } catch (err) {
        console.log("error", err);
        res.status(500).json({ msg: "Server error" });
    }
})

module.exports = homeRouter;