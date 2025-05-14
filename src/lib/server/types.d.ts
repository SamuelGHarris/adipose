import { z } from 'zod';
import type { BodyWeight } from '@prisma/client';
import { Prisma } from '@prisma/client';

export const BodyWeightSchema = z.object({
	userId: z.string().cuid(),
	weight: z.number({ message: 'Must be a number > 0' }).gt(0, 'Must be > 0'),
	dateTime: z.string().datetime().optional()
});
