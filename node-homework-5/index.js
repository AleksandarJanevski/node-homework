const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/ime/:name", (req, res) => {
  let name = req.params.name.toLocaleLowerCase();
  let paren = false;
  paren = name.length % 2 === 0;

  let samoglaski = 0;

  for (let ime of name) {
    if (ime === "a" || ime === "e" || ime === "i" || ime === "o" || ime === "u") {
      samoglaski++;
    }
  }

  res.send(
    `Paren: ${paren ? "da" : "ne"}, Broj na karakteri: ${name.length}, Broj na samoglaski: ${samoglaski}, Broj na soglaski: ${name.length - samoglaski}.`
  );

});

app.post("/ime", (req, res) => {
  let name = req.body.name.toLocaleLowerCase();
  let paren = false;
  paren = name.length % 2 === 0;

  let samoglaski = 0;

  for (let ime of name) {
    if (ime === "a" || ime === "e" || ime === "i" || ime === "o" || ime === "u") {
      samoglaski++;
    }
  }

  res.send(
    `Paren: ${paren ? "da" : "ne"}, Broj na karakteri: ${name.length}, Broj na samoglaski: ${samoglaski}, Broj na soglaski: ${name.length - samoglaski}.`
  );
  
});

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server started successfully on port 10000");
});
