import { z } from 'zod';
import type { BodyWeight } from '@prisma/client';
import { Prisma } from '@prisma/client';

export const BodyWeightSchema = z.object({
	weight: z.number('Must be a number > 0').gt(0, 'Must be > 0'),
	dateTime: z.coerce
		.date<string>()
		.optional()
		.refine((val) => val === undefined || val <= new Date(), 'Please stay in the past or present')
});
