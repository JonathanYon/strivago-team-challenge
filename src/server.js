import express from 'express';

import cors from 'cors';

import listEndpoints from 'express-list-endpoints';

import mongoose from 'mongoose';
import usersRouter from './service/user/index.js';
import { errorMiddlewares } from './errorMiddlewares.js';

const { PORT, MONGO_CONNECTION_STRING } = process.env;

const server = express();

// ******************** MIDDLEWARES *************************+

server.use(cors());

server.use(express.json());

// ******************** ROUTES ******************************
server.use('user', usersRouter);

// ********************** ERROR HANDLERS *************************

server.use([errorMiddlewares]);

console.table(listEndpoints(server));

server.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Server is running on ${PORT}  and connected to db`);
  } catch (error) {
    console.log('Db connection is failed ', error);
  }
});

server.on('error', (error) =>
  console.log(`❌ Server is not running due to : ${error}`)
);
