import { __dirname, app, createPath } from "../server.js";
import express from "express";
import path from "path";
import morgan from "morgan";

const title = "Oops... 404";

/**
 * For unexpected request
 * Should be  last il impoert
 */
export let middlewares = () => {
  app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
  );
  app.use(express.static(path.join(__dirname, "public/views")));
  app.use(express.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    next();
  });
};

export let errorHandling = () => {
  app.use((req, res) => {
    res.status(404).render(createPath("error.ejs"), { title });
  });
};
