import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { isUserAuthenticated } from '$lib/server/utils';
import { BodyWeightSchema } from '$lib/server/types.d';
import { recordBodyWeight, getAllBodyWeightData } from '$lib/server/body_weight';
import type { User } from '@auth/sveltekit';

/**
 * Record body weight
 *
 * type requestBody = {
 * 	weight: string;
 * 	dateTime?: string;
 * }
 * 
 * type response = {
 * 	success: boolean;
 * 	errors?: ZodError (Not the real type name)
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
		return json({ success: false, errors }, { status: 400 });
	}

	// Add to database
	const val = await recordBodyWeight(
		result.data.userId as string,
		result.data.weight as number,
		result.data.dateTime
	);
	return val ? json({ success: true}) : json({ success: false }, { status: 500 });
};

/** 
 * Get body weight data
 * 
 * type searchParams = {
 * 	get?: 'all'
 * }
 */
export const GET: RequestHandler = async ({ locals, url }) => {
	const user: User = isUserAuthenticated(await locals.auth());
	if (!user.id) return json({success: false}, { status: 401 });
	const search = url.searchParams;
	const getType = search.get('get');
	if (getType) {
		const val = await getAllBodyWeightData(user.id);
		return json({ data: val, success: true });
	} else {
		return json({ success: false }, { status: 400 });
	}
};
