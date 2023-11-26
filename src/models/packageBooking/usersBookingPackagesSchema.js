const { default: mongoose } = require("mongoose");

const usersBookingPackagesSchema = mongoose.Schema({
    packageName: {
        type: String,
        required: true,
    },
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
    userEmail: {
        type: String,
        required: true,
    },
    packageCost: {
        type: Number,
        required: true,
    },
    features: {
        type: Array,
        required: true,
    },
});

module.exports = usersBookingPackagesSchema;
