const { default: mongoose } = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    authImage: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    postTag: {
        type: String,
        required: true,
    },
    postImage: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    },
    commentsCount: {
        type: Number,
        required: true,
    },
});

module.exports = postSchema;
