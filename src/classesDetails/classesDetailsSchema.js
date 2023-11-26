const { default: mongoose } = require("mongoose");

const classesDetailsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    short_description: {
        type: String,
        required: true,
    },
    intensityLevel: {
        type: String,
        required: true,
    },
    prerequisites: {
        type: String,
        required: true,
    },
    targetAudience: {
        type: String,
        required: true,
    },
    benefits: {
        type: Array,
        required: true,
    },
    equipmentNeeded: {
        type: Array,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
});
module.exports = classesDetailsSchema;
