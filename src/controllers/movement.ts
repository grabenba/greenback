import { Request, Response } from 'express';
import MovementModel from '../models/movement';

abstract class MovementController {
	static async createNew(req: Request, res: Response) {
		// VALIDAR DATOS CON ZOD
		const { userId } = res.locals.userData;
		const validatedData = { ...req.body, userId };

		const response = await MovementModel.createNew(validatedData);
		return res.status(201).json(response);
	}

	static async getAll(req: Request, res: Response) {
		const { userId } = res.locals.userData;
		const userMovements = await MovementModel.getAll(userId);

		return res.json({ accountInfo: userMovements });
	}
}

export default MovementController;
