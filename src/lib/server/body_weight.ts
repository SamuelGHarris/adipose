import { Prisma } from '@prisma/client';

import { prisma } from './prisma';

export const recordBodyWeight = async (userId: string, weight: number, dateTime?: Date) => {
	prisma.bodyWeight.create({
	    data: {
	        userId,
			weight: Prisma.Decimal(weight),
			dateTime: dateTime
	    }
	});
};
