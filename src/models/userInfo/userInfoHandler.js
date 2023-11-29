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

/**
 * @api {get} / get a single data
 * @apiDescription get a user details
 * @apiPermission user
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} all the tools.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 **/
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
router.route("/role/:email").get(async (req, res) => {
    try {
        // get id from params
        const email = req.params.email;
        // filter by id
        const result = await UserInfo.find({ email });
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});
router.route("/update-profile/:id").put(async (req, res) => {
    try {
        const result = await UserInfo.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    photoUrl: req.body.photoUrl,
                    uid: req.body.uid,
                    role: req.body.role,
                    country: req.body.country,
                    district: req.body.district,
                    phoneNumber: req.body.phoneNumber,
                    age: req.body.age,
                    gender: req.body.gender,
                    weight: req.body.weight,
                    height: req.body.height,
                    DateOfBirth: req.body.DateOfBirth,
                },
            }
        );
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

// // add a trainer data
router.route("/").post(async (req, res) => {
    try {
        const email = req.body.email;
        const user = await UserInfo.findOne({ email });
        if (user) {
            console.log("User found:", user);
            res.status(200).json({ user: true });
        } else {
            // Create a new instance of the model with the data from the request body
            const newData = new UserInfo(req.body);
            // Save the new document to the database
            const savedData = await newData.save();

            console.log(savedData);
            res.status(201).json(savedData);
        }
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: "Fail to save data" });
    }
});

const data = { userInfoRouter: router };

module.exports = data;
