import { app } from "../server.js";

let redirectings = () => {
  app.get("/index", (req, res) => {
    res.redirect("/");
  });

  app.get("/home", (req, res) => {
    res.redirect("/");
  });
};

export default redirectings;
