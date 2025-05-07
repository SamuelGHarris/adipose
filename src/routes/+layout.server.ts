import { error } from '@sveltejs/kit';
// import type { User } from '@prisma/client';

import { findUserByEmail } from '$lib/server/user';

import type { LayoutServerLoad } from './$types';

import type { User } from '@auth/sveltekit';

export const load: LayoutServerLoad = async (event) => {
	let session = await event.locals.auth();
	return {
		session
	};
};
