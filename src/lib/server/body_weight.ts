import { Prisma } from '@prisma/client';

import { prisma } from './prisma';

export const recordBodyWeight = async (userId: string, weight: number, dateTime?: Date) => {
	try {
		await prisma.bodyWeight.create({
			data: {
				userId,
				weight: Prisma.Decimal(weight),
				dateTime: dateTime
			}
		});
	} catch {
		console.error('Failed to record body weight');
	}
};
