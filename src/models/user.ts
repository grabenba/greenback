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
			movements: [],
			balance: 0,
		});

		return { message: `User ${fullname} created successfully`, id: res.id };
	}

	static async getAll() {
		const result = [] as any;
		const usersRef = firestore.collection('users');
		const snapshot = await usersRef.get();

		snapshot.forEach((doc) => {
			const { fullname, email } = doc.data();
			result.push({ fullname, email });
		});

		return result;
	}
}

export default UserModel;
