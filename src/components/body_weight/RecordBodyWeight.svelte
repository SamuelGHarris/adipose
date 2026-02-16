<script lang="ts">
	import { slide } from 'svelte/transition';
	import { format } from 'date-fns';

	import { recordBodyWeight } from '$lib/body_weight.remote';

	import Loading from '$components/Loading.svelte';

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
	const id = $props.id();
	let formMode = $state<'today' | 'anotherDay'>('today');
	let formToggleMessage = $derived(
		formMode === 'today' ? 'submit for a previous day' : 'submit for today'
	);
	recordBodyWeight.result;
	let weightErrors = $derived(recordBodyWeight.fields.weight.issues() ?? []);
	let dateErrors = $derived(recordBodyWeight.fields.dateTime.issues() ?? []);
	let isSubmitting = $derived(recordBodyWeight.pending > 0);
	$inspect('wewight', recordBodyWeight.fields.weight.value());
	$inspect('date', recordBodyWeight.fields.dateTime.value());

	const toggleFormMode = () => {
		formMode = formMode === 'today' ? 'anotherDay' : 'today';

		if (formMode === 'today') {
			recordBodyWeight.fields.dateTime.set('');
		} else {
			recordBodyWeight.fields.dateTime.set(format(new Date(), "yyyy-MM-dd'T'HH:mm"));
		}
		recordBodyWeight.validate();
	};
</script>

<!-- @component Form for submitting bodyweight -->
<form
	id="record-body-weight-{id}"
	{...recordBodyWeight.enhance(async ({ form, submit }) => {
		if (!isSubmitting) {
			try {
				await submit();
				if (!recordBodyWeight.fields.allIssues()) {
					form.reset();
				}
			} catch (error) {
				console.error('Failure during body weight form submission');
			}
		}
	})}
	class="bg-base-300 text-base-content flex flex-col rounded-md px-4 py-2 shadow-lg {className}"
>
	<p class="font-doto text-accent pt-2 pb-4 text-center text-lg font-[900]">Give me your weight.</p>
	<div class="join">
		<input
			{...recordBodyWeight.fields.weight.as('number')}
			class={['input input-md join-item', weightErrors.length > 0 && 'input-error']}
		/>
		<div class="join-item bg-base-100 flex items-center justify-center p-2 text-sm">lbs</div>
	</div>
	{#if weightErrors.length > 0}
		<p class="text-error pt-1 text-xs font-light">{weightErrors[0].message}</p>
	{/if}

	{#if formMode === 'anotherDay'}
		<input
			{...recordBodyWeight.fields.dateTime.as('datetime-local')}
			transition:slide={{ duration: 100 }}
			class={['input input-md mt-2 flex', dateErrors.length > 0 && 'input-error']}
		/>
		{#if dateErrors.length > 0}
			<p class="text-error pt-1 text-xs font-light">{dateErrors[0].message}</p>
		{/if}
	{/if}
	<button disabled={isSubmitting} class="btn btn-primary mt-4">
		{#if isSubmitting}
			<Loading size="sm" color="bg-primary-content" />
		{:else}
			Submit
		{/if}
	</button>
	<button
		type="button"
		onclick={toggleFormMode}
		class="btn btn-link btn-xs text-base-content/50 mt-2 text-shadow-none"
	>
		{formToggleMessage}
	</button>
</form>
