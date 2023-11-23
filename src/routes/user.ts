import { Router } from 'express';
import UserController from '../controllers/user';
import MovementController from '../controllers/movement';
import { authorizeUser } from '../middlewares/token-validator';

const userRouter = Router();

userRouter.post('/', UserController.createNew);
userRouter.post('/auth/token', UserController.login);

userRouter.get('/:userId', authorizeUser, UserController.getInfo);

userRouter.get('/:userId/movements', authorizeUser, MovementController.getAll);

userRouter.post(
	'/:userId/movements',
	authorizeUser,
	MovementController.createNew
);

userRouter.use('*', (req, res) =>
	res.status(404).json({ error: 'Resource not found' })
);

export default userRouter;
