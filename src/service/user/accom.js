import { Router } from "express";
import createHttpError from "http-errors";
import accoModel from "../accommodation/schema.js";

const usersRouter = Router();

usersRouter.get("/me/accommodation", async (req, res, next) => {
  try {
    const accommodation = await accoModel.find({ host: req.user._id });
    res.send(accommodation);
  } catch (error) {
    next(
      createHttpError(
        404,
        `😔Sorry ${req.user.name} we could NOT find your accommodation!!`
      )
    );
  }
});

usersRouter.post("/accommodation", async (req, res, next) => {
  try {
    const accommodation = await accoModel(req.body).seve();
    res.send(accommodation);
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
