const express = require("express");
const mongoose = require("mongoose");
const postSchema = require("./postSchema");
const router = express.Router();

const Post = new mongoose.model("post", postSchema);

router.route("/").get(async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = page * limit;

        const result = await Post.find().skip(skip).limit(parseInt(limit));
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

router.route("/:id").put(async (req, res) => {
    try {
        const newLike = req.body.likeCount;
        const postId = req.params.id;
        console.log(postId);

        if (isNaN(newLike)) {
            return res.status(400).json({ error: "Invalid likeCount value" });
        }
        const result = await Post.updateOne(
            { _id: req.params.id },
            {
                $set: { likeCount: newLike },
            }
        );
        if (result.nModified > 0) {
            return res
                .status(200)
                .json({ message: "LikeCount updated successfully" });
        } else {
            return res
                .status(404)
                .json({ error: "Post not found or likeCount unchanged" });
        }
    } catch (error) {
        console.log(error);
    }
});

const data = { postRouter: router };

module.exports = data;
