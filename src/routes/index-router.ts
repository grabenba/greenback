import { Router } from 'express';
import userRouter from './user-router';
import { handle405Error } from '../middlewares/wrong-method-handler';
import ServerController from '../controllers/server';

const mainRouter = Router();

mainRouter.get('/status', ServerController.getStatus);

mainRouter.use('/users', userRouter);

mainRouter.all('/status', handle405Error);

export default mainRouter;
