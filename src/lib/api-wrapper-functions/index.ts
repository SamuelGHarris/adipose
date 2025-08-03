export type RecordBodyWeightError = {
	weight?: { _errors: string[] };
	dateTime?: { _errors: string[] };
};

export const recordBodyWeight = async ({
	weight,
	dateTime
}: {
	weight: number | undefined;
	dateTime: string | undefined;
}) => {
	const response = await fetch('/api/body-weight', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			weight,
			dateTime
		})
	});
	return (await response.json()) as
		| {
				success: false;
				errors?: RecordBodyWeightError;
		  }
		| { success: true };
};

export const getAllBodyWeightData = async () => {
	const response = await fetch('/api/body-weight?get=all');
}
