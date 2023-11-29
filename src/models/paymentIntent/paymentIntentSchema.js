const { default: mongoose } = require("mongoose");

const paymentIntentSchema = mongoose.Schema({
    packageId: {
        type: String,
        required: true,
    },
    trainerId: {
        type: String,
        required: true,
    },
    slotId: {
        type: String,
        required: true,
    },
    paymentDate: {
        type: String,
        required: true,
    },
    transitionId: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    slotId: {
        type: String,
        required: true,
    },
});
module.exports = paymentIntentSchema;
