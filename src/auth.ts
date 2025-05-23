import { SvelteKitAuth, type DefaultSession } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { Role } from '@prisma/client';

import { prisma } from '$lib/server/prisma';

declare module '@auth/sveltekit' {
	interface Session {
		user: {
			id: string;
			role: Role;
		} & DefaultSession['user'];
	}
	interface User {
		role: Role;
	}
}

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [GitHub],
	callbacks: {
		async session({ session, user }) {
			if (user) {
				session.user = {
					id: user.id,
					name: user.name,
					email: user.email,
					emailVerified: user.emailVerified,
					image: user.image,
					role: user.role
				};
			}
			return session;
		}
	}
});
