import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { isUserAuthenticated } from '$lib/server/utils';
import { BodyWeightSchema } from '$lib/server/types.d';
import { recordBodyWeight } from '$lib/server/body_weight';
import type { User } from '@auth/sveltekit';

export const POST: RequestHandler = async ({ locals, request }) => {
	const user: User = isUserAuthenticated(await locals.auth());
	let { weight, dateTime } = await request.json();

	// Validate inputs
	weight = weight ? Number(weight) : undefined;
	const tempDate = new Date(dateTime);
	dateTime = isNaN(tempDate.valueOf()) ? dateTime : tempDate.toISOString(); // Poorly checking date
	const submissionData = { userId: user.id, weight, dateTime };
	console.log(submissionData);
	const result = BodyWeightSchema.safeParse(submissionData);
	if (!result.success) {
		const { _errors, ...errors } = result.error.format();
		return json({ success: false, errors });
	}

	// Add to database
	const val = await recordBodyWeight(
		submissionData.userId as string,
		submissionData.weight as number,
		new Date(submissionData.dateTime as string)
	);
	return json({ success: true });
};
