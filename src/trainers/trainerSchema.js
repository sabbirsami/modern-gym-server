const { default: mongoose } = require("mongoose");

const trainerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    joiningDate: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },

    available_time_in_day: {
        type: String,
        required: true,
    },
    available_time_slot: {
        type: Array,
        required: true,
    },
    available_time_in_week: {
        type: Array,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

module.exports = trainerSchema;
