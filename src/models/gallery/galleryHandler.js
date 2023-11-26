const express = require("express");
const mongoose = require("mongoose");
const gallerySchema = require("./gallerySchema");
const router = express.Router();

const GalleryInfo = new mongoose.model("gallery", gallerySchema);

router.route("/").get(async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = page * limit;
        // get all data from database
        const result = await GalleryInfo.find()
            .skip(skip)
            .limit(parseInt(limit));
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

const data = { galleryRouter: router };

module.exports = data;
