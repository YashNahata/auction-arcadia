const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

router.get("/:id", (req, res) => {
  Player.findOne({ slug_id: req.params.id }, (err, player) => {
    if (err) {
      res.status(500).json({ message: err });
    } else {
      res.json({ data: player });
    }
  });
});

module.exports = router;
