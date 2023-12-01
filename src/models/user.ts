import firestore from './database';
import { getSHA512OfPassword, getSalt } from '../utils/password-hasher';
import { getToken } from '../utils/jwt';

abstract class UserModel {
	static async createNew(userData: any) {
		const { fullname, email, password } = userData;
		const salt = getSalt();
		const hashedPassword = getSHA512OfPassword(password, salt);

		const newUser = await firestore.collection('users').add({
			fullname,
			email,
			movements: [],
			balance: 0,
		});

		await firestore
			.collection('auths')
			.doc(newUser.id)
			.set({
				password: `${salt}:${hashedPassword}`,
			});

		return {
			message: `User ${fullname} created successfully`,
			id: newUser.id,
		};
	}

	static async getInfo(userId: string) {
		const userSnapshot = await firestore
			.collection('users')
			.doc(userId)
			.get();
		const userInfo = userSnapshot.data();

		return { userInfo };
	}

	static async login(userCredentials: any) {
		const { email, password } = userCredentials;

		const userQuerySnapshot = await firestore
			.collection('users')
			.where('email', '==', email)
			.get();

		const userId = userQuerySnapshot.docs[0].id;

		const auth = (await firestore
			.collection('auths')
			.doc(userId)
			.get()) as any;

		const [salt, dbHashedPassword] = auth.data().password.split(':');

		const hashedPassword = getSHA512OfPassword(password, salt);

		if (hashedPassword === dbHashedPassword) {
			const token = getToken({ email, userId });

			return {
				message: 'User logged successfully!',
				token,
			};
		}

		return { error: 'Wrong credentials' };
	}
}

export default UserModel;
