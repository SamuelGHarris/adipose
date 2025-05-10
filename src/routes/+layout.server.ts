import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	let session = await event.locals.auth();
	return {
		session
	};
};
