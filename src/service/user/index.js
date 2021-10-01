import express from "express";
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

export default userRouter;
