const express = require("express");
const cors = require("cors");

const applyMiddleware = (app) => {
    app.use(
        cors({
            origin: [
                "http://localhost:5173",
                "https://sami-modern-gym.web.app",
                "https://sami-modern-gym.firebaseapp.com",
            ],
            // credentials: true,
        })
    );
    app.use(express.json());
};

module.exports = applyMiddleware;
