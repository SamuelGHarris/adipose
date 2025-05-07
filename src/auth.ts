import { SvelteKitAuth, type DefaultSession } from '@auth/sveltekit';
import { type User } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { Role } from '@prisma/client';

import { prisma } from '$lib/server/prisma';

declare module '@auth/sveltekit' {
	interface Session {
		user: {
			id: string;
			role: Role;
			/**
			 * By default, TypeScript merges new interface properties and overwrites existing ones.
			 * In this case, the default session user properties will be overwritten,
			 * with the new ones defined above. To keep the default session user properties,
			 * you need to add them back into the newly declared interface.
			 */
		} & DefaultSession['user'];
	}
}

type CustomUser = User;
CustomUser & { role: Role };
// declare module "@auth/sveltekit" {
// 	type User = CustomUser;
// }

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
