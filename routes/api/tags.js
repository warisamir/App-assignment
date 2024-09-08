const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Tag = require("../../models/Tag");

router.get("/",  async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
