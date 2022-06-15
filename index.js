const express = require("express");

const app = express();

const port = process.env.port || 3000;

app.use(express.json());

app.post("/", (req, res) => {
  const word = req.body.word?.replace(/o/g, "") || "Bad request";
  res.send(word);
});

app.listen(port);
