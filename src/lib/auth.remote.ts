import { form } from '$app/server';
import z from 'zod';

export const createUser = form(
	z
		.object({
			name: z.string(),
			email: z.email(),
			password: z
				.string()
				.min(8, { message: 'Must be at least 8 characters' })
				.max(20, { message: 'Must be less than 20 characters' })
				.refine((val) => /[A-Z]/.test(val), {
					message: 'Must contain at least one uppercase letter'
				})
				.refine((val) => /[a-z]/.test(val), {
					message: 'Must contain at least one lowercase letter'
				})
				.refine((val) => /[0-9]/.test(val), {
					message: 'Must contain at least one number'
				})
				.refine((val) => /[^A-Za-z0-9]/.test(val), {
					message: 'Must contain at least one special character'
				}),
			confirmPassword: z.string()
		})
		.refine()
);
