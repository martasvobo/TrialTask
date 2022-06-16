const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/", (req, res) => {
  const letter = req.body?.letter;
  let word = req.body?.word;
  if (letter && word) {
    const regex = new RegExp(letter, "gi");
    word = word.replace(regex, "");
    res.send(word);
  } else {
    res.send("Bad request");
  }
});

app.listen(port);
