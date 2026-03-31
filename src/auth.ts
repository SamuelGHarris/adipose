// import { SvelteKitAuth, type DefaultSession } from '@auth/sveltekit';
// import GitHub from '@auth/sveltekit/providers/github';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import type { Role } from '../prisma/generated/prisma/client';

// import { prisma } from '$lib/server/prisma';

// declare module '@auth/sveltekit' {
// 	interface Session {
// 		user: {
// 			id: string;
// 			role: Role;
// 		} & DefaultSession['user'];
// 	}
// 	interface User {
// 		role: Role;
// 	}
// }

// export const { handle, signIn, signOut } = SvelteKitAuth({
// 	adapter: PrismaAdapter(prisma),
// 	providers: [GitHub],
// 	callbacks: {
// 		async session({ session, user }) {
// 			if (user) {
// 				session.user = {
// 					id: user.id,
// 					name: user.name,
// 					email: user.email,
// 					emailVerified: user.emailVerified,
// 					image: user.image,
// 					role: user.role
// 				};
// 			}
// 			return session;
// 		}
// 	},
// 	trustHost: true
// });

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../prisma/generated/client";
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
		emailAndPassword: { 
			enabled: true, 
		}, 
		socialProviders: { 
			github: { 
				clientId: process.env.GITHUB_CLIENT_ID as string, 
				clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
			}, 
		},
});