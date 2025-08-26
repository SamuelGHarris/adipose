import { error } from '@sveltejs/kit';
import { Prisma } from '@prisma/client';

import { form, query } from '$app/server';

import { prisma } from '$lib/server/prisma';
import { isUserAuthenticated } from '$lib/server/utils';
import { BodyWeightSchema } from '$lib/server/types.d';

export const recordBodyWeight = form(async (data) => {
	const user = await isUserAuthenticated();
	if (!user) {
		error(401, 'Unauthorized');
	}

	const submissionData = {
		userId: user.id,
		weight: data.get('weight'),
		dateTime: data.get('datetime') ?? undefined
	};
	const result = BodyWeightSchema.safeParse(submissionData);
	if (!result.success) {
		const { _errors, ...errors } = result.error.format();
		return { success: false, errors };
	}

	try {
		const val = await prisma.bodyWeight.create({
			data: {
				userId: result.data.userId,
				weight: Prisma.Decimal(result.data.weight),
				dateTime: result.data.dateTime
			}
		});
		return { success: !!val };
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
		return val.map((obj) => ({...obj, weight: obj.weight.toNumber()}))
	} catch {
		error(500, 'Server Error');
	}
});
