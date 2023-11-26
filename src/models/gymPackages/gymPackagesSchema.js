const { default: mongoose } = require("mongoose");

const gymPackagesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    features: {
        type: Array,
        required: true,
    },
});
module.exports = gymPackagesSchema;
