import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";

import { prisma } from "$lib/server/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
		plugins: [sveltekitCookies(getRequestEvent)],
		trustedOrigins: [
			'http://192.168.68.74:5173',
			'http://localhost:5173'
		],
		emailAndPassword: { 
			enabled: true, 
		}, 
		socialProviders: { 
			github: { 
				clientId: process.env.GITHUB_CLIENT_ID!, 
				clientSecret: process.env.GITHUB_CLIENT_SECRET!, 
				redirectURI: "http://localhost:5173/api/auth/callback/github"
			}, 
		},
});