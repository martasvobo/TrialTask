const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/", (req, res) => {
  const word = req.body.word?.replace(/o/g, "") || "Bad request";
  res.send(word);
});

app.post("/", (req, res) => {
  res.send("hello");
});

app.listen(port);
