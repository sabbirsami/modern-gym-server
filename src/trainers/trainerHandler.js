const express = require("express");
const mongoose = require("mongoose");
const trainerSchema = require("./trainerSchema");

const router = express.Router();

const Trainer = new mongoose.model("Trainer", trainerSchema);

// get all trainers data
router.route("/").get(async (req, res, next) => {
    console.log("Here");
    try {
        const paymentStatus = "paid";

        // get all data from database
        const trainers = await Trainer.find({});
        const totalPaidMember = await Trainer.countDocuments({
            paymentStatus: paymentStatus,
        });
        const totalMember = await Trainer.countDocuments();
        console.log(totalMember);
        res.send({ trainers, totalPaidMember, totalMember });
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

router.route("/find-by-email/:email").get(async (req, res) => {
    try {
        // get id from params
        const email = req.params.email;
        // filter by id
        const result = await Trainer.find({ email });
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
router.route("/:id").put(async (req, res) => {
    try {
        const result = await Trainer.updateOne(
            { _id: req.params.id },
            {
                $set: { paymentStatus: "paid" },
            }
        );
        if (result.nModified > 0) {
            return res
                .status(200)
                .json({ message: "paymentStatus updated successfully" });
        } else {
            return res
                .status(404)
                .json({ error: "Post not found or likeCount unchanged" });
        }
    } catch (error) {
        console.log(error);
    }
});
router.route("/:id").delete(async (req, res) => {
    try {
        const result = await Trainer.deleteOne({ _id: req.params.id });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});
router.route("/application-accept/:id").put(async (req, res) => {
    try {
        console.log(req.params.id);
        const result = await Trainer.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: { role: "trainer" },
            }
        );
        //         const article = await Article.findById(id);
        //   const newPayload={...article._doc}
        //   if (!article) {
        //     const article = await create({ ...payload, author });

        //     return { article, status: 201 };
        //   }

        //   article.overwrite(newPayload);
        //   await article.save();
        console.log(result);
        if (result.nModified > 0) {
            return res
                .status(200)
                .json({ message: "paymentStatus updated successfully" });
        } else {
            return res
                .status(404)
                .json({ error: "Post not found or likeCount unchanged" });
        }
    } catch (error) {
        console.log(error);
    }
});

const data = { trainerRouter: router };

module.exports = data;
