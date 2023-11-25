const express = require("express");
const mongoose = require("mongoose");
const trainerSchema = require("./trainerSchema");
const router = express.Router();

const Trainer = new mongoose.model("Trainer", trainerSchema);

// get all trainers data
router.route("/").get(async (req, res, next) => {
    console.log("Here");
    try {
        // get all data from database
        const result = await Trainer.find({});
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
        const result = await Trainer.find({ _id: id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

// // add a trainer data
router.route("/").post(async (req, res) => {
    try {
        // Create a new instance of the model with the data from the request body
        const newData = new Trainer(req.body);

        // Save the new document to the database
        const savedData = await newData.save();

        console.log(savedData);
        res.status(201).json(savedData);
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Fail to save data" });
    }
});

// // update a trainer data
// router.put("/:id", async (req, res) => {});
// router.use((req, res, next) => {
//     res.status(404).json({
//         success: false,
//         message: "Not found",
//         errorMessages: [
//             {
//                 path: req.originalUrl,
//                 message: "API not found",
//             },
//         ],
//     });
//     next();
// });
const data = { trainerRouter: router };

module.exports = data;
