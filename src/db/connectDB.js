const { default: mongoose } = require("mongoose");

const connectDB = async () => {
    console.log("connecting to database");
    await mongoose.connect(
        `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@moderngym.22nyhio.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("connected to database");
};
module.exports = connectDB;
