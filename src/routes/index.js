import express from "express";
import { router } from "./userRoutes.js";

export const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "funcionou o bd" });
  });

  app.use(express.json(), router);
};
