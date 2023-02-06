const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const Player = require("../models/Player");

router.post("/", (req, res) => {
  let teamId = req.body.teamId;
  let playerId = req.body.playerId;
  let price = req.body.price;
  Team.findOne({ _id: teamId }, (err, team) => {
    if (err) {
      res.json({ message: err });
    }
    let arr = team.team;
    let balance = parseInt(team.wallet) - parseInt(price);
    if (balance >= 0) {
      if (!arr.includes(playerId)) {
        arr.push(playerId);
        team.update({ wallet: balance });
        team.update({ team: arr });
        team.save();
      }
      res.json({ message: "Player added successfully" });
    } else {
      res.json({ message: "Wallet amount not enough" });
    }
  });
});

router.get("/", (req, res) => {
  Team.find({}, (err, teams) => {
    if (err) {
      res.json({ message: err });
    }
    Player.find({}, (err, players) => {
      if (err) {
        res.json({ message: err });
      }
      res.json({ teams: teams, players: players });
    });
  });
});

module.exports = router;
