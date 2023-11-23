import { Request, Response } from 'express';
import UserModel from '../models/user';

abstract class UserController {
	static async createNew(req: Request, res: Response) {
		// VALIDAR DATOS CON ZOD
		const validatedData = req.body;

		const response = await UserModel.createNew(validatedData);
		return res.status(201).json(response);
	}

	static async getInfo(req: Request, res: Response) {
		const { userId } = res.locals.userData;
		const user = await UserModel.getInfo(userId);

		return res.json(user);
	}

	static async login(req: Request, res: Response) {
		const { email, password } = req.body; // VALIDAR CON ZOD
		const user = await UserModel.login({ email, password });

		return res.json(user);
	}
}

export default UserController;
