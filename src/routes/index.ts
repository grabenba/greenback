import { Router } from 'express';
import userRouter from './user';
import movementRouter from './movement';

const mainRouter = Router();

// Usar metodo ALL según corresponda

mainRouter.get('/', (req, res) => res.json({ server: 'running' }));

// MODIFICAR ANIDAMIENTO DE ENDPOINTS

mainRouter.use('/users/movements', movementRouter);
mainRouter.use('/users', userRouter);
// mainRouter.use('/accounts', accountRouter);

mainRouter.use('*', (req, res) => res.json({ error: 'Not found' }));

export default mainRouter;
