import express from "express";
import UserController from "../controllers/userController";

export const router = express.Router();

router
  .get("/getUsers", UserController.getAllUsers)
  .post("/sendUserInfo", UserController.criaUser);
