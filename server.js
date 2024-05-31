import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//console.log(__filename, __dirname);

const port = process.env.PORT;

const server = http.createServer(async (req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.writeHead(500, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ message: "Server Error" }));

  //   console.log(req.url);
  //   console.log(req.method);

  try {
    //check if GET request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.write("Server Error");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
