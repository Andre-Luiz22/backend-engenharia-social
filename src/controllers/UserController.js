import { user } from "../models/userModel.js";
import bcrypt from "bcrypt";

const saltRounds = Math.floor(Math.random() * (16 - 10 + 1)) + 10;
const salt = bcrypt.genSaltSync(saltRounds);

class UserController {
  static getAllUsers = async (req, res) => {
    try {
      const allUsers = await user.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ message: "erro" });
    }
  };
  static criaUser = async (req, res) => {
    try {
      const { name, email, keyPix, typePix, address, school } = req.body;

      const newUser = {
        name,
        email,
        keyPix,
        typePix,
        address,
        school,
      };

      await user.create(newUser);

      res.status(201).json({ message: "dados salvos com sucesso" });
    } catch (erro) {
      res.status(500).json({
        message: "Algo deu errado",
        erro,
      });
    }
  };
}

export default UserController;
