import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import 'reflect-metadata';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import uploadConfig from '@config/upload';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server Error',
  });
});

app.listen(3333, () => {
  console.log('🚀 Server is running on port 3333...');
});
