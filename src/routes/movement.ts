import { Router } from 'express';
import MovementController from '../controllers/movement';

const movementRouter = Router();

movementRouter.get('/:userId', MovementController.getAll);
movementRouter.post('/', MovementController.createNew);

movementRouter.use('*', (req, res) =>
	res.status(404).json({ error: 'Resource not found' })
);

export default movementRouter;
