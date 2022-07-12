const express = require("express");
const router = express.Router();

// @Route  GET api/goal
// @Desc   Test route
// @access Public
router.get("/", (req, res) => {
  res.send("goal route");
});

module.exports = router;
