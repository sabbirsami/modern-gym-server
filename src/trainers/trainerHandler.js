const express = require("express");
const mongoose = require("mongoose");
const trainerSchema = require("./trainerSchema");
const router = express.Router();

const Trainer = new mongoose.model("Trainer", trainerSchema);

// get all trainers data
router.get("/", async (req, res) => {});

// get a trainer data
router.get("/:id", async (req, res) => {});

// add a trainer data
router.post("/", async (req, res) => {});

// update a trainer data
router.put("/:id", async (req, res) => {});

module.exports = router;
