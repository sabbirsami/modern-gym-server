const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const paymentIntentSchema = require("./paymentIntentSchema");
const stripe = require("stripe")(`${process.env.STRIPE_SECRET}`);

const paymentIntentModal = mongoose.model("paymentIntent", paymentIntentSchema);

// // add a payment data
router.route("/").post(async (req, res) => {
    try {
        const { packageCost } = req.body;
        const amount = parseInt(packageCost * 100);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ["card"],
        });
        return res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Fail to save data" });
    }
});

router.route("/").post(async (req, res) => {
    try {
        // Create a new instance of the model with the data from the request body
        const newData = new paymentIntentModal(req.body);

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
        const result = await paymentIntentModal.find({});
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});
const data = { paymentIntentRouter: router };
module.exports = data;
