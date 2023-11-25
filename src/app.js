const express = require("express");
const applyMiddleware = require("./middlewares");
const connectDB = require("./db/connectDB");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

applyMiddleware(app);

app.get("/", (req, res) => {
    res.send("Modern Gym Running...");
});

// handling all unknown route -------------------------------

app.all("*", (req, res, next) => {
    const error = new Error(
        `Can't find ${req.originalUrl} route on the server`
    );
    error.status = 404;
    next(error);
});

app.use(globalErrorHandler);

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Modern Gym Server is running on port ${port}`);
    });
};
main();
