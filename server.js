import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  res.writeHead(500, { "Content-Type": "application/json" });
  // res.write("<h1>Hello Trav</h1>");
  res.end(JSON.stringify({ message: "Server Error" }));
  //res.end();
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
