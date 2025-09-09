const mongoose = require('mongoose');
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    restaurant_license_number: {
        type: String,
        required: true,
        unique: true,
    },
    license_img_url: {
        type: String,
        required: true,
    },
    logo_url: {
        type: String,
    },
    opens_at: {
        type: "String",
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/,
    },
    closes_at: {
        type: String,
        required: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/,
    },
    approval_status: {
        type: String,
        enum: ["pending", "approved", "rejected", "blocked"],
        default: "pending"
    },
}, { timestamps: true });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;