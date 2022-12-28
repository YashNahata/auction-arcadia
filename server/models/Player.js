const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  player: {
    type: String,
    required: true,
  },
  team: {
    type: String,
  },
  matches: {
    type: String,
  },
  innings: {
    type: String,
  },
  runs: {
    type: String,
  },
  highest: {
    type: String,
  },
  hundreds: {
    type: String,
  },
  fifties: {
    type: String,
  },
  average: {
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
