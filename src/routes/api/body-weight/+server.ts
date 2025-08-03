import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { isUserAuthenticated } from '$lib/server/utils';
import { BodyWeightSchema } from '$lib/server/types.d';
import { recordBodyWeight } from '$lib/server/body_weight';
import type { User } from '@auth/sveltekit';

/**
 * Record body weight
 *
 * type requestBody = {
 * 	weight: string;
 * 	dateTime?: string;
 * }
 */
export const POST: RequestHandler = async ({ locals, request }) => {
	const user: User = isUserAuthenticated(await locals.auth());
	let { weight, dateTime } = await request.json();
	
	// Validate inputs
	weight = weight ? Number(weight) : undefined;
	dateTime = dateTime === '' ? undefined : dateTime;
	const submissionData = { userId: user.id, weight, dateTime };
	const result = BodyWeightSchema.safeParse(submissionData);
	if (!result.success) {
		const { _errors, ...errors } = result.error.format();
		return json({ success: false, errors });
	}

	// Add to database
	const val = await recordBodyWeight(
		result.data.userId as string,
		result.data.weight as number,
		result.data.dateTime
	);
	return json({ success: true });
};

export const GET: RequestHandler = async ({ locals, url }) => {
	const user: User = isUserAuthenticated(await locals.auth());
	console.log(url.search);
	return json('hi');
};
