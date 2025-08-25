<script lang="ts">
	import type { Component } from 'svelte';
	import {
		IconPlus,
		IconScaleOutline,
		IconStretching,
		IconStretching2
	} from '@tabler/icons-svelte';
	import RecordBodyWeight from './body_weight/RecordBodyWeight.svelte';
	import { clickOutside } from '$lib/actions';

	type Props = {
		class?: string;
	};

	let { class: className } = $props();

	let isRecordBodyWeightShowing = $state(false);
	let recordBodyWeight = $state<undefined | HTMLDivElement>();
	$inspect(isRecordBodyWeightShowing);
</script>

<!-- {#snippet control(Icon: typeof IconScaleOutline)}
    <button class="btn w-19 h-19 btn-circle gap-0 flex items-center justify-center">
        <IconPlus size={15} stroke={4} />
        <Icon size={25} />
    </button>
{/snippet}

<div class="flex flex-col justify-center items-center gap-2 {className}">
    {@render control(IconStretching2)}
    {@render control(IconScaleOutline)}
</div> -->

<!-- <svelte:window onclick={(e) => {
	if (isRecordBodyWeightShowing && recordBodyWeight !== undefined && !recordBodyWeight.contains(e.target as HTMLElement)) {
		isRecordBodyWeightShowing = false;
	}
}} /> -->

<div class="flex flex-col items-center justify-center gap-2 {className}">
	{#if isRecordBodyWeightShowing}
		<div
			use:clickOutside
			onoutsideclick={() => (isRecordBodyWeightShowing = !isRecordBodyWeightShowing)}
			bind:this={recordBodyWeight}
		>
			<RecordBodyWeight />
		</div>
	{:else}
		<button
			onclick={(e) => {
				e.stopPropagation();
				isRecordBodyWeightShowing = !isRecordBodyWeightShowing;
			}}
			class="btn btn-circle h-19 w-19"
		>
			<IconPlus size={25} />
		</button>
	{/if}
</div>
