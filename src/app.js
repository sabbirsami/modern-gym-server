const express = require("express");
const applyMiddleware = require("./middlewares");
const connectDB = require("./db/connectDB");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

applyMiddleware(app);

app.get("/", (req, res) => {
    res.send("Modern Gym Running...");
});

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Modern Gym Server is running on port ${port}`);
    });
};
main();
