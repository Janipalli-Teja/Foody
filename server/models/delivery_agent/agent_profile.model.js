const mongoose = require('mongoose');
const agentSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    vehicle_number: {
        type: String,
        required: true,
    },
    license_number: {
        type: String,
        required: true
    },
    license_img_url: {
        type: String,
        required: true,
    },
    approval_status: {
        type: String,
        enum: ["pending", "approved", "rejected", "blocked"],
        default: "pending"
    },
    availability: {
        type: String,
        enum: ["available", "unavailable"],
        required: true,
        default: "unavailable"
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true });

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;