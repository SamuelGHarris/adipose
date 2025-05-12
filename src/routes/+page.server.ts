import type { Actions } from './$types';
import type { User } from '@auth/sveltekit';

import { isUserAuthenticated } from '$lib/server/utils';
import { BodyWeightSchema } from '$lib/server/models';
import { recordBodyWeight } from '$lib/server/body_weight';

export const actions = {
    recordBodyWeight: async ({ locals, request }) => {
        let user: User = isUserAuthenticated(await locals.auth());

        // Validate inputs
        const formData = await request.formData();
        const weight = formData.get('weight') ? Number (formData.get('weight')) : undefined;
        const dateTime = formData.get('dateTime') ?? undefined;
        const submissionData = { userId: user.id, weight, dateTime };
        const result = BodyWeightSchema.safeParse(submissionData);
        console.log(result)
        if (!result.success) return { recordBodyWeight: { ...result, error: result.error?.format() } };

        // Add to database
        // recordBodyWeight(submissionData.userId as string, submissionData.weight as number, new Date(submissionData.dateTime as string))
        return { recordBodyWeight: { success: true } };
    }
} satisfies Actions;