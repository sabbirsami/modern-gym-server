const { default: mongoose } = require("mongoose");
require("dotenv").config();
async function connectDB() {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@moderngym.22nyhio.mongodb.net/test?retryWrites=true&w=majority`
        );
        console.log("Database connected successfully");
    } catch (error) {
        console.log("failed to connect", error);
    }
}
module.exports = connectDB;
