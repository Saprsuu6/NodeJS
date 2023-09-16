import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

app.get("/", (req, res) => {
  console.log("Servert started");
  console.log("Just for development");

  res.sendFile(createPath("contacts"));
});

app.get("/index", (req, res) => {
  res.sendFile(createPath("index"));
});

app.get("/contacts", (req, res) => {
  res.redirect("/");
});

app.get("/about-us", (req, res) => {
  res.redirect("/contacts");
});

/**
 * for uexpected requests
 */
app.use((req, res) => {
  res.status(404).sendFile(createPath("error"));
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
