import type { User } from '@prisma/client';

import { prisma } from '$lib/server/prisma';

export const findUserByEmail = (email: string) => {
	return prisma.user.findUnique({
		where: {
			email
		}
	}) as Promise<User | null>;
};
