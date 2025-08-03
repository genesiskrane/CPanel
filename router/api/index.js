const express = require("express");

const router = express.Router();

router.get("/app", (req, res) => {
  res.json({
    text: "Welcome to the application",
    info: {
      name: "Basic Node App",
      version: "1.0.0",
    },
  });
});

router.get("/git/commit", (req, res) => {
  res.sendStatus(200).send("X-encoded-commit: 1234567890abcdef");
});

router.post("/git/commit", (req, res) => {
  res.sendStatus(200).send("Post commit received");
});

module.exports = router;
