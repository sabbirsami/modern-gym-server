const express = require("express");
const mongoose = require("mongoose");
const newsletterSchema = require("./newsletterSchema");
const verifyToken = require("../../authentication/verifyToken");
const router = express.Router();

const Newsletter = new mongoose.model("newsletter", newsletterSchema);

router.route("/").get(async (req, res) => {
    try {
        // get all data from database
        const newsLetterSubscriber = await Newsletter.find({});
        const totalNewsLetterSubscriber =
            await Newsletter.estimatedDocumentCount();

        res.send({ newsLetterSubscriber, totalNewsLetterSubscriber });
    } catch (error) {
        console.log(error);
    }
});
router.route("/").post(async (req, res) => {
    try {
        const newData = new Newsletter(req.body);

        // Save the new document to the database
        const savedData = await newData.save();

        console.log(savedData);
        res.status(201).json(savedData);
    } catch (error) {
        console.log(error);
    }
});

const data = { newsletterRouter: router };

module.exports = data;
