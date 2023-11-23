import { Router } from 'express';
import userRouter from './user';

const mainRouter = Router();

mainRouter.get('/status', (req, res) => res.json({ server: 'running' }));

mainRouter.use('/users', userRouter);

mainRouter.use('*', (req, res) => res.json({ error: 'Not found' }));

export default mainRouter;
