import { error } from '@sveltejs/kit';
import { Prisma } from '@prisma/client';

import { form, query } from '$app/server';

import { prisma } from '$lib/server/prisma';
import { isUserAuthenticated } from '$lib/server/utils';
import { BodyWeightSchema } from '$lib/server/types.d';

export const recordBodyWeight = form(BodyWeightSchema, async ({ weight, dateTime }) => {
	const user = await isUserAuthenticated();
	if (!user) {
		error(401, 'Unauthorized');
	}

	try {
		const val = await prisma.bodyWeight.create({
			data: {
				userId: user.id,
				weight: Prisma.Decimal(weight),
				dateTime: dateTime
			}
		});
	} catch {
		error(500, 'Server Error');
	}
});

export const getAllBodyWeights = query(async () => {
	const user = await isUserAuthenticated();
	if (!user) {
		error(401, 'Unauthorized');
	}

	try {
		const val = await prisma.bodyWeight.findMany({
			where: {
				userId: user.id
			},
			omit: {
				userId: true
			},
			orderBy: {
				dateTime: 'asc'
			}
		});
		return val.map((obj) => ({ ...obj, weight: obj.weight.toNumber() }));
	} catch {
		error(500, 'Server Error');
	}
});
