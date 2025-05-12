import { prisma } from './prisma';

// export const getBodyWeight = async ()

export const recordBodyWeight = async (userId: string, weight: number, dateTime?: Date) => {
	prisma.bodyWeight.create({
	    data: {
	        userId,
			weight: Prisma.Decimal(weight),
			dateTime: dateTime ? dateTime : Date.now()
	    }
	})
};
