const express = require("express");
const mongoose = require("mongoose");
const classesDetailsSchema = require("./classesDetailsSchema");
const router = express.Router();
const classesDetailsModal = new mongoose.model(
    "classesDetail",
    classesDetailsSchema
);

router.route("/").get(async (req, res) => {
    try {
        const result = await classesDetailsModal.find({});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});
router.route("/:id").get(async (req, res) => {
    try {
        const result = await classesDetailsModal.find({ _id: req.params.id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

const data = { classesDetailsRouter: router };
module.exports = data;
