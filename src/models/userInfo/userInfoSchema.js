const { default: mongoose } = require("mongoose");

const userInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    trainerId: {
        type: String,
    },
    country: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    district: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    weight: {
        type: Number,
    },
    height: {
        type: String,
    },
    DateOfBirth: {
        type: String,
    },
});

module.exports = userInfoSchema;
