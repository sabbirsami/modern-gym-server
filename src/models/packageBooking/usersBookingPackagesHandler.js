const express = require("express");
const mongoose = require("mongoose");
const usersBookingPackagesSchema = require("./usersBookingPackagesSchema");
const router = express.Router();

const UsersBookingPackagesModal = mongoose.model(
    "usersBookingPackage",
    usersBookingPackagesSchema
);
// // add a booking data
router.route("/").post(async (req, res) => {
    try {
        // Create a new instance of the model with the data from the request body
        const newData = new UsersBookingPackagesModal(req.body);

        // Save the new document to the database
        const savedData = await newData.save();

        console.log(savedData);
        res.status(201).json(savedData);
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Fail to save data" });
    }
});

router.route("/").get(async (req, res) => {
    try {
        // find all booking
        const result = await UsersBookingPackagesModal.find({});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});
router.route("/:trainerEmail").get(async (req, res) => {
    try {
        const trainerEmail = req.params.trainerEmail;
        console.log(trainerEmail);
        const result = await UsersBookingPackagesModal.find({ trainerEmail });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});
router.route("/userData/:userEmail").get(async (req, res) => {
    try {
        const userEmail = req.params.userEmail;
        console.log(userEmail);
        const result = await UsersBookingPackagesModal.find({ userEmail });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

const data = { usersBookingPackagesRouter: router };
module.exports = data;
