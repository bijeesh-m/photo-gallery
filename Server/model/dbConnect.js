const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.DB_URL)
    .then((con) => {
        console.log("db connected!");
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;
