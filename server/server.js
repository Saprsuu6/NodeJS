import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import middlewares from "./routes/middlewares.js";
import redirectings from "./routes/redirectings.js";

export const app = express();
app.set("view engine", "ejs");

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export const createPath = (item) =>
  path.resolve(__dirname, "public/views", `${item}`);

app.get("/", (req, res) => {
  const title = "You at home ^_^";
  const contacts = [
    { name: "Telegram", link: "https://t.me/AndrewSaprigin" },
    { name: "Email", link: "coffeei.2002@gmail.com" },
  ];

  res.render(createPath("index.ejs"), { contacts, title });
});

redirectings();
middlewares();

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
