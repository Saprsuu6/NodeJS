import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  const data = JSON.stringify([
    { name: "Andry", age: "21" },
    { name: "Ivan", age: "21" },
  ]);

  res.write(data);
  res.end();
});

server.listen(3000, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
