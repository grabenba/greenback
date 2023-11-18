import { Router } from 'express';
import UserController from '../controllers/user';

const userRouter = Router();

userRouter.get('/', UserController.getAll);

// REGISTRAR NUEVO USUARIO
userRouter.post('/', UserController.createNew);

userRouter.use('*', (req, res) =>
	res.status(404).json({ error: 'Resource not found' })
);

export default userRouter;
