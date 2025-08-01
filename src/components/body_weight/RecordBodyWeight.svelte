<script lang="ts">
	import { slide } from 'svelte/transition';

	import { recordBodyWeight, type RecordBodyWeightError } from '$lib/api-wrapper-functions';

	type Props = {
		onSubmit: (weight: number, dateTime: Date | undefined) => void;
		class?: string;
	};

	let { onSubmit, class: className }: Props = $props();

	// Form mode
	let formMode = $state<'today' | 'anotherDay'>('today');
	let formToggleMessage = $derived(
		formMode === 'today' ? 'submit for a previous day' : 'submit for today'
	);
	// Form fields
	let weight = $state<number>();
	let dateTime = $state<string>();
	let errors = $state<RecordBodyWeightError>();

	const toggleFormMode = () => {
		formMode = formMode === 'today' ? 'anotherDay' : 'today';
		// errors = undefined; // Clear errors
		// Reset dateTime
		if (formMode === 'today') {
			dateTime = undefined;
		}
	};

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		const response = await recordBodyWeight({ weight, dateTime });
		if (!response.success) {
			errors = response.errors;
		} else {
			errors = undefined;
			weight = undefined;
			dateTime = undefined;
		}
	};
	$inspect(errors);
</script>

<form
	onsubmit={handleSubmit}
	class="bg-base-300 text-base-content flex flex-col rounded-md px-4 py-2 shadow-lg {className}"
>
	<p class="font-doto text-accent pt-2 pb-4 text-center text-lg font-[900]">Give me your weight.</p>
	<div class="join">
		<input
			name="weight"
			bind:value={weight}
			class={['input input-md join-item', errors?.weight && 'input-error']}
		/>
		<div class="join-item bg-base-100 flex items-center justify-center p-2 text-sm">lbs</div>
	</div>
	{#if errors?.weight}
		<p class="text-error pt-1 text-xs font-light">{errors.weight._errors?.[0]}</p>
	{/if}

	{#if formMode === 'anotherDay'}
		<input
			name="datetime"
			transition:slide={{ duration: 100 }}
			bind:value={dateTime}
			class={['input input-md mt-2 flex', errors?.dateTime && 'input-error']}
			type="datetime-local"
		/>
		{#if errors?.dateTime}
			<p class="text-error pt-1 text-xs font-light">{errors.dateTime._errors?.[0]}</p>
		{/if}
	{/if}
	<button class="btn btn-primary mt-4">Submit</button>
	<button
		type="button"
		onclick={toggleFormMode}
		class="btn btn-link btn-xs text-base-content/50 text-shadow-none mt-2">{formToggleMessage}</button
	>
</form>
