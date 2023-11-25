const express = require("express");
const mongoose = require("mongoose");
const trainerSchema = require("./trainerSchema");
const router = express.Router();

const Trainer = new mongoose.model("Trainer", trainerSchema);

// get all trainers data
router.route("/").get(async (req, res, next) => {
    console.log("Here");
    try {
        const result = await Trainer.find({});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

// // get a trainer data
router.route("/:id").get(async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Trainer.find({ _id: id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

// // add a trainer data
router.route("/").post(async (req, res) => {
    const newTrainer = new Trainer(req.body);
    await newTrainer.save((err) => {
        if (err) {
            res.status(500).json({
                error: "There is a server side error!",
            });
        } else {
            res.status(200).json({
                message: "Trainer data inserted successfully",
            });
        }
    });
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
