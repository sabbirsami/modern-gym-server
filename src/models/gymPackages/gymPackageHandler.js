const express = require("express");
const mongoose = require("mongoose");
const gymPackagesSchema = require("./gymPackagesSchema");
const router = express.Router();
const gymPackagesModal = new mongoose.model("gymPackage", gymPackagesSchema);

router.route("/").get(async (req, res) => {
    try {
        const result = await gymPackagesModal.find({});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});
router.route("/:id").get(async (req, res) => {
    try {
        const id = req.params.id;
        const result = await gymPackagesModal.find({ _id: id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

const data = { gymPackagesRouter: router };
module.exports = data;
