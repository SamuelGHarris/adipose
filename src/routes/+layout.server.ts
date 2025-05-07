import type { LayoutServerLoad } from './$types';

import type { User } from '@auth/sveltekit';

export const load: LayoutServerLoad = async (event) => {
	let session = await event.locals.auth();

	// If signed in get user data
	if (session?.user?.id) {
	}
	return {
		session
	};
};
