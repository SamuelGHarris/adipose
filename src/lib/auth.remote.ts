import { form } from '$app/server';
import z from 'zod';

import { auth } from './auth/server';

export const signInUser = form(
	z.object({
		email: z.email(),
		password: z.string()
	}),
	async ({ email, password }) => {
		const response = await auth.api.signInEmail({
			body: {
				email,
				password
			},
			asResponse: true
		});
		if (!response.ok) {
			console.error(`User failed to sign in (email: ${email})`);
			return { success: false };
		}

		return new Response(null, {
			status: 303,
			headers: {
				Location: '/',
				'Set-Cookie': response.headers.get('set-cookie') ?? ''
			}
		});
	}
);

export const createUser = form(
	z
		.object({
			name: z.string().nonempty({ message: 'This cannot be empty' }),
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
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Passwords do not match',
			path: ['confirmPassword']
		}),
	async ({ name, email, password }) => {
		const response = await auth.api.signUpEmail({
			body: { name, email, password, callbackURL: '/' },
			asResponse: true
		});
		if (!response.ok) {
			console.error(`Failed to create user (name: ${name}, email: ${email})`);
			return { success: false };
		}

		return new Response(null, {
			status: 303,
			headers: {
				Location: '/',
				'Set-Cookie': response.headers.get('set-cookie') ?? ''
			}
		});
	}
);
