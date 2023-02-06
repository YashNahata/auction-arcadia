const express = require("express");
const router = express.Router();
const fetch = require("cross-fetch");
const Player = require("../models/Player");

router.get("/", async (req, res) => {
  fetch(process.env.SHEET_URL)
    .then((response) => response.json())
    .then((players) => {
      try {
        Player.deleteMany({})
          .then(() => {
            for (let i = 0; i < players.data.length; i++) {
              Object.assign(players.data[i], { slug_id: i });
              const p = new Player(players.data[i]);
              p.save();
            }
            res.json({ message: "success" });
          })
          .catch((error) => {
            res.status(500).json({ message: error });
          });
      } catch (error) {
        res.status(500).json({ message: error });
      }
    });
});

module.exports = router;
