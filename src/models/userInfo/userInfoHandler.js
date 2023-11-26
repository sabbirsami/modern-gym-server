const express = require("express");
const mongoose = require("mongoose");
const userInfoSchema = require("./userInfoSchema");
const router = express.Router();

const UserInfo = new mongoose.model("user", userInfoSchema);

// get all trainers data
router.route("/").get(async (req, res) => {
    try {
        // get all data from database
        const result = await UserInfo.find({});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

// // get a trainer data
router.route("/:id").get(async (req, res) => {
    try {
        // get id from params
        const id = req.params.id;
        // filter by id
        const result = await UserInfo.find({ _id: id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

// // add a trainer data
router.route("/").post(async (req, res) => {
    try {
        // Create a new instance of the model with the data from the request body
        const newData = new UserInfo(req.body);

        // Save the new document to the database
        const savedData = await newData.save();

        console.log(savedData);
        res.status(201).json(savedData);
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Fail to save data" });
    }
});

const data = { userInfoRouter: router };

module.exports = data;
