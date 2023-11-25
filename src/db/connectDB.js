const { default: mongoose } = require("mongoose");
require("dotenv").config();

// const connectDB = async () => {
//     console.log("connecting to database");
//     console.log(process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD);
//     await mongoose
//         .connect(

//         )
//         .catch((err) => console.log(err.reason));

//     const db = await mongoose.connection;

//     db.on("error", console.error.bind(console, "MongoDB connection error:"));
//     db.once("open", () => {
//         console.log("Connected to MongoDB");
//     });
// };
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
