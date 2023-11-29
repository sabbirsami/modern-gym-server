const express = require("express");
const mongoose = require("mongoose");
const signTokenSchema = require("./signTokenSchema");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const router = express.Router();

const Token = new mongoose.model("Token", signTokenSchema);

router.route("/").post(async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: "22h",
    });
    console.log(token);
    res.send({ token: token });
});
const data = { signTokenRouter: router };

module.exports = data;
