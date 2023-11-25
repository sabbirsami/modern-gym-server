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
    benefits: {
        type: Array,
        required: true,
    },
});
module.exports = classesDetailsSchema;
