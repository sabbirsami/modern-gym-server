const { default: mongoose } = require("mongoose");

const newsletterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

module.exports = newsletterSchema;
