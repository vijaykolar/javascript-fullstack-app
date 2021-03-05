const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home-guest");
  next();
});

router.get("/sign-up", (req, res, next) => {
  res.send("Sign up");
  next();
});

module.exports = router;
