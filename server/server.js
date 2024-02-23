import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import redirectings from "./routes/redirectings.js";
import { errorHandling, middlewares } from "./routes/middlewares.js";
import routes from "./routes/routes.js";

export const app = express();
app.set("view engine", "ejs");

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export const createPath = (item) =>
  path.resolve(__dirname, "public/views", `${item}`);

export let messages = [];
export const contacts = [
  { name: "Telegram", link: "https://t.me/AndrewSaprigin" },
  { name: "Email", link: "coffeei.2002@gmail.com" },
];

middlewares();
routes();
redirectings();
errorHandling();

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
