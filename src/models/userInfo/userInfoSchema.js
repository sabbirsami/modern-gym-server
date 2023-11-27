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
});

module.exports = userInfoSchema;
