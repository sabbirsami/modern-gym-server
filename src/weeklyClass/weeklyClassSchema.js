const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
    class: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    totalJoinPeople: {
        type: Number,
        required: true,
    },
});

const weeklyClassSchema = mongoose.Schema({
    day: {
        type: String,
        required: true,
    },
    classes: [classSchema],
});

module.exports = weeklyClassSchema;
