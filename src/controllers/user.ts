import { Request, Response } from 'express';
import UserModel from '../models/user';

abstract class UserController {
	static async createNew(req: Request, res: Response) {
		// VALIDAR DATOS CON ZOD
		const validatedData = req.body;

		console.log(req.body);

		const response = await UserModel.createNew(validatedData);
		return res.status(201).json(response);
	}

	static async getAll(req: Request, res: Response) {
		const users = await UserModel.getAll();

		return res.json({ users });
	}
}

export default UserController;
