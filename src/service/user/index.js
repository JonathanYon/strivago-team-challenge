import express from "express";
import { JWTAuthMiddleware } from "../../auth/token.js";
import { JWTAuthenticate } from "../../auth/tools.js";
import userModel from "../user/schema.js";

const userRouter = express.Router();

userRouter.post("/register", async (req, res, next) => {
  const registerUser = await userModel.create(req.body);

  const { _id } = registerUser;

  res.status(201).send(_id);
});

userRouter.get("/", async (req, res, next) => {
  const getUsers = await userModel.find();

  res.send(getUsers);
});

userRouter.get("/me", JWTAuthMiddleware, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userFound = await userModel.checkUser(email, password);

    if (userFound) {
      const accessToken = await JWTAuthenticate(userFound);
      res.send({ accessToken });
      next();
    } else {
      console.log("Credentials are not ok!");
      next();
    }
  } catch (error) {
    console.log(error);
  }
});

export default userRouter;
