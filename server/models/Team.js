const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  members: {
    type: [String],
    required: true,
  },
  wallet: {
    type: String,
  },
  team: {
    type: [String],
  },
});

const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;
