import { Request, Response } from 'express';
import MovementModel from '../models/movement';

abstract class MovementController {
	static async createNew(req: Request, res: Response) {
		// VALIDAR DATOS CON ZOD
		const validatedData = req.body;

		console.log(req.body);

		const response = await MovementModel.createNew(validatedData);
		return res.status(201).json(response);
	}

	static async getAll(req: Request, res: Response) {
		const { userId } = req.params;
		const userMovements = await MovementModel.getAll(userId);

		return res.json({ accountInfo: userMovements });
	}
}

export default MovementController;
