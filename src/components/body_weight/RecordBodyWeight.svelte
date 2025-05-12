<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import type { PageProps } from '../../routes/$types';

	type Props = {
		onSubmit: (weight: number, dateTime: Date | undefined) => void;
		class?: string;
	};

	let { onSubmit, class: className, data, form }: Props & PageProps = $props();

	$inspect(form);
	$inspect(data);

	const context = getContext('formRecordBodyWeight');
	
	$inspect(context());
	// Form mode
	let formMode = $state<'today' | 'anotherDay'>('today');
	let formToggleMessage = $derived(
		formMode === 'today' ? 'submit for a previous day' : 'submit for today'
	);
	const toggleFormMode = () => {
		formMode = formMode === 'today' ? 'anotherDay' : 'today';
	};

	// Form fields
	let weight = $state<number>();
	let dateTime = $state<string>();
</script>

<form
	use:enhance
	method="POST"
	action="/?/recordBodyWeight"
	class="bg-base-300 text-base-content flex flex-col rounded-md px-4 py-2 shadow-lg {className}"
>
	<p class="font-doto text-accent pt-2 pb-4 text-center text-lg font-[900]">Give me your weight.</p>
	<div class="join">
		<input name="weight" bind:value={weight} class="input input-md join-item" />
		<div class="join-item bg-base-100 flex items-center justify-center p-2 text-sm">lbs</div>
	</div>
	{#if formMode === 'anotherDay'}
		<input
			name="dateTime"
			transition:slide={{ duration: 100 }}
			bind:value={dateTime}
			class="input input-md mt-2"
			type="datetime-local"
		/>
	{/if}
	<button class="btn btn-primary mt-4">Submit</button>
	<button type="button" onclick={toggleFormMode} class="btn btn-link btn-xs text-base-content/50 text-shadow-none"
		>{formToggleMessage}</button
	>
</form>
