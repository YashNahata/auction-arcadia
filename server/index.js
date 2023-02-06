const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/index");
const playerRouter = require("./routes/player");
const createTeamRouter = require("./routes/create-team");
const bidRouter = require("./routes/bid");

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);
app.use("/player", playerRouter);
app.use("/create-team", createTeamRouter);
app.use("/bid", bidRouter);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
