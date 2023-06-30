const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("Here is about page");
  } else {
    res.end(`
    <h1>Page doesn't exist</h1>
    <p>We don't seem to find the page you're looking for</p>
    <a href="/">Move back home</a>
  `);
  }
});

server.listen(5001);
