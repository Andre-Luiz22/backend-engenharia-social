import express from "express";
import UserController from "../controllers/UserController.js";

export const router = express.Router();

router
  .get("/getUsers", UserController.getAllUsers)
  .post("/sendUserInfo", UserController.criaUser);
