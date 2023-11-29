require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        console.log("una");
        return res.status(401).send({ message: "unauthorized access" });
    }
    console.log("secret---------", process.env.TOKEN_SECRET);

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            console.log("una2");
            return res.status(401).send({ message: "unauthorized access" });
        }
        console.log("decode---------", req.decoded);
        req.decoded = decoded;
        next();
    });
};

module.exports = verifyToken;
