import type { Actions } from './$types';
import { isUserAuthenticated } from '$lib/server/utils';
import { BodyWeightSchema } from '$lib/server/models';

export const actions = {
    recordBodyWeight: async ({ locals, request }) => {
        let user = isUserAuthenticated(await locals.auth());

        // Validate inputs
        const formData = await request.formData();
        const weight = formData.get('weight') ? Number (formData.get('weight')) : undefined;
        const dateTime = formData.get('dateTime') ?? undefined;
        const submissionData = { userId: user.id, weight, dateTime };
        const result = BodyWeightSchema.safeParse(submissionData);
        if (!result.success) return result;

        // Add to database

    }
} satisfies Actions;