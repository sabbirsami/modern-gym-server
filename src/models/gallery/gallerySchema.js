const { default: mongoose } = require("mongoose");

const gallerySchema = mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
});

module.exports = gallerySchema;
