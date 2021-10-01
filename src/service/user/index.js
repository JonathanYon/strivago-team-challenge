import express from 'express';
import userModel from './schema.js';
//import middle
import createHttpError from 'http-errors';

const usersRouter = express.Router();

usersRouter.get('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log('error in user router', error);
    next(error);
  }
});
usersRouter.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log('error in user router', error);
    next(error);
  }
});
usersRouter.delete('/', async (req, res, next) => {
  try {
  } catch (error) {
    console.log('error in user router', error);
    next(error);
  }
});

export default usersRouter;
