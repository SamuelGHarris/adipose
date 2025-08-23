import { Prisma } from '@prisma/client';

import { prisma } from './prisma';

export const recordBodyWeight = async (userId: string, weight: number, dateTime?: Date) => {
	try {
		const val = await prisma.bodyWeight.create({
			data: {
				userId,
				weight: Prisma.Decimal(weight),
				dateTime: dateTime
			}
		});
		return val;
	} catch {
		console.error('Failed to record body weight');
		return null;  
	}
};

export const getAllBodyWeightData = async (userId: string) => {
	try {
		const val = await prisma.bodyWeight.findMany({
			where: {
				userId: userId
			},
			omit: {
				userId: true
			},
			orderBy: {
				dateTime: 'asc'
			}
		});
		return val;
	} catch {
		console.error('Failed to get body weight data for user: ' + userId);
		return null;
	}
};
