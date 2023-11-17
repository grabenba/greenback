import { Router } from 'express';
import userRouter from './user';

const mainRouter = Router();

mainRouter.get('/', (req, res) => res.json({ server: 'running' }));

mainRouter.all('/users', userRouter);
// mainRouter.all('/accounts', accountRouter);
// mainRouter.all('/movements', movementRouter);

export default mainRouter;
