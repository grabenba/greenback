import firestore from './database';
import { getSHA512OfPassword } from '../utils/password-hasher';

abstract class UserModel {
	static async createNew(userData: any) {
		const { fullname, email, password } = userData;
		const hashedPassword = getSHA512OfPassword(password);

		const res = await firestore.collection('users').add({
			fullname,
			email,
			password: hashedPassword,
		});

		return { message: `User ${res.id} created successfully` };
	}
}

export default UserModel;
