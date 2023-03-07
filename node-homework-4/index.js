const http = require("http");

const handler = (req, res) => {
  const [_, ime, url] = req.url.split("/");

  let name = url.toLowerCase();
  let bukvi = name.split("");
  let paren;
  let samoglaski = 0;
  let soglaski = 0;
  let exception = 0;

  if (name.length % 2 === 0) {
    paren = " da ";
  } else {
    paren = " ne ";
  };

  bukvi.map((item) => item === "a" || item === "e" || item === "i" || item === "o" || item === "u" ? (samoglaski += 1) : (soglaski += 1));

  bukvi.map((item, index) => {
    const prev = bukvi[index - 1];
    const next = bukvi[index + 1];
    if (
      item === "r" &&
      prev !== "u" &&
      next !== "u" &&
      prev !== "a" &&
      next !== "a" &&
      prev !== "e" &&
      next !== "e" &&
      prev !== "i" &&
      next !== "i" &&
      prev !== "o" &&
      next !== "o" &&
      prev !== "r" &&
      next !== "r"
    ) {
        exception += 1;
        soglaski -= 1;
      }
  });


  res.end(`parno:${paren}, karakteri: ${name.length}, soglaski: ${soglaski}, samoglaski: ${samoglaski + exception}`);

};

const server = http.createServer(handler);

server.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log("Server successfully started!");
});
