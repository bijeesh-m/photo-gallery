const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index.js");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public")); // now Public is being hosted by express statically

const PORT = process.env.PORT;

app.use("/", router);

app.listen(PORT, () => {
    console.log(`App is Listening on ${PORT}`);
});
