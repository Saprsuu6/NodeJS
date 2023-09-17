import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

const server = http.createServer((req, res) => {
  console.log("Servert started");
  console.log("Just for development");

  let basePath = "";

  switch (req.url) {
    case "/":
    case "/home":
    case "/index.html":
      basePath = createPath("contacts");
      break;
    case "/index":
      basePath = createPath("index");
      break;
    default:
      basePath = createPath("error");
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 404;

      res.end();
    } else {
      res.setHeader("Content-Type", "text-html");
      res.statusCode = 200;

      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
