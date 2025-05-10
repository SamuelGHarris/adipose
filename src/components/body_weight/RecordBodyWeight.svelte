<script lang="ts">
	type Props = {
		onSubmit: (weight: number, dateTime: Date | undefined) => void;
		class?: string;
	};

	let { onSubmit, class: className }: Props = $props();

	let formMode = $state<'today' | 'anotherDay'>('today');
	let formToggleMessage = $derived(
		formMode === 'today' ? 'submit for a previous day' : 'submit for today'
	);
	const toggleFormMode = () => {
		formMode = formMode === 'today' ? 'anotherDay' : 'today';
	};
</script>

<div class="bg-base-300 text-base-content flex flex-col rounded-md p-2 shadow-lg {className}">
	<p class="font-doto text-accent pt-2 pb-4 text-center text-lg font-[900]">Give me your weight.</p>
	<div class="join">
		<input class="input input-md join-item" />
		<div class="join-item bg-base-100 flex items-center justify-center p-2 text-sm">lbs</div>
	</div>
	{#if formMode === 'anotherDay'}
		<input class="input input-md mt-2" type="datetime-local" />
	{/if}
	<button class="btn btn-primary mt-4">Submit</button>
	<button onclick={toggleFormMode} class="btn btn-link btn-xs text-base-content/50 text-shadow-none"
		>{formToggleMessage}</button
	>
</div>
