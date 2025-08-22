import { getRequestEvent } from '$app/server';

/** Returns User if authenticated, else null */
export const isUserAuthenticated = async () => {
	const { locals } = getRequestEvent();
	const session = await locals.auth();

	return !session?.user?.id ? null : session.user;
};
