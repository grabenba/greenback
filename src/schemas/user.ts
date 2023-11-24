import { z } from 'zod';

const User = z.object({
	fullname: z.string({
		required_error: 'Full name is required',
	}),
	email: z
		.string({
			required_error: 'Email is required',
		})
		.email(),
	password: z
		.string({
			required_error: 'Passowrd is required',
		})
		.min(8),
});

const validateUser = (userData: any) => User.safeParse(userData);
const validatePartialUser = (userData: any) =>
	User.partial().safeParse(userData);

export { validateUser, validatePartialUser };
