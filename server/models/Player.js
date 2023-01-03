const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  player: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  matches: {
    type: String,
  },
  runs: {
    type: String,
  },
  wickets: {
    type: String,
  },
  average: {
    type: String,
  },
  strike_rate: {
    type: String,
  },
  economy: {
    type: String,
  },
  base_price: {
    type: String,
  },
  slug_id: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;
