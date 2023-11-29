const { default: mongoose } = require("mongoose");

const signTokenSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
});
module.exports = signTokenSchema;
