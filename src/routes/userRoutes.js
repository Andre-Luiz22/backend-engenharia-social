import UserController from "../controllers/userController.js";
import express from "express";

export const router = express.Router();

router
  .get("/getUsers", UserController.getAllUsers)
  .post("/sendUserInfo", UserController.criaUser);
