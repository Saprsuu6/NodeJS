import { __dirname, app, createPath } from "../server.js";
import express from "express";
import path from "path";

/**
 * For unexpected request
 * Should be  last il impoert
 */
let middlewares = () => {
  const title = "Oops... 404";
  app.use(express.static(path.join(__dirname, "public/views")));

  app.use((req, res) => {
    res.status(404).render(createPath("error.ejs"), { title });
  });
};

export default middlewares;
