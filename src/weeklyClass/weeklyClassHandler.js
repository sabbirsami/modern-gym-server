const express = require("express");
const mongoose = require("mongoose");
const weeklyClassSchema = require("./weeklyClassSchema");
const router = express.Router();

const ScheduleModel = new mongoose.model("weeklyclasses", weeklyClassSchema);

router.route("/").get(async (req, res, next) => {
    try {
        // get all data from database
        const result = await ScheduleModel.find({});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

const data = { weeklyClassesRouter: router };

module.exports = data;
