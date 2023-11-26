const express = require("express");
const mongoose = require("mongoose");
const postSchema = require("./postSchema");
const router = express.Router();

const Post = new mongoose.model("post", postSchema);

router.route("/").get(async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = page * limit;
        // get all data from database
        const result = await Post.find().skip(skip).limit(parseInt(limit));
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

const data = { postRouter: router };

module.exports = data;
