const express = require("express");
const applyMiddleware = require("./middlewares");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

applyMiddleware(app);

app.get("/", (req, res) => {
    res.send("Modern Gym Running...");
});

app.listen(port, () => {
    console.log(`Modern Gym Server is running on port ${port}`);
});
