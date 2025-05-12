import type { Session, User } from "@auth/sveltekit";
import { redirect } from "@sveltejs/kit";

/** Will return the auth User object or redirect the user with a 303 */
export const isUserAuthenticated = (session: Session | null): User => {
    if (!session?.user?.id) {
        redirect(303, '/login')
    }
    return session.user;
};
