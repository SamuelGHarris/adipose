<script lang="ts">
	import type { BodyWeight } from '@prisma/client';
	import RecordBodyWeight from './body_weight/RecordBodyWeight.svelte';
	import { IconTrash, IconX } from '@tabler/icons-svelte';

	import { getAllBodyWeights } from '$lib/body_weight.remote';
	import { format } from 'date-fns';
	import Loading from './Loading.svelte';

	type Props = {
		bodyWeightData: Omit<BodyWeight, 'UserId'>[];
		class?: string;
	};

	let { bodyWeightData, class: className }: Props = $props();
</script>

<div class={className}>
	<!-- <DisplayBodyWeight data={bodyWeightData} /> -->
	<!-- <RecordBodyWeight class="w-60" /> -->
	<div class="flex h-full w-full flex-col items-center overflow-hidden p-4">
		<div class="bg-base-300 font-doto flex w-full rounded-t-lg py-2 text-lg font-bold shadow-2xl">
			<span class="flex-1 text-center">Weight</span>
			<span class="flex-1 text-center">Date</span>
			<span class="w-10"></span>
		</div>
		<div
			class="divide-base-content/10 bg-base-300 w-full flex-1 divide-y-1 overflow-y-auto rounded-b-lg px-2"
		>
			<svelte:boundary>
				{#each await getAllBodyWeights() as { id, weight, dateTime } (id)}
					<div class="bg-base-200 flex w-full py-1">
						<span class="flex flex-1 items-center justify-center">{weight} lbs</span>
						<span class="flex flex-1 items-center justify-center"
							>{format(dateTime, 'MM/dd/yyyy hh:mm a')}</span
						>
						<button class="btn-square hover:text-error active:text-error mx-2 transition-colors">
							<IconX size={20} />
						</button>
					</div>
				{/each}
				{#snippet pending()}
					<div class="flex h-full w-full items-center justify-center">
						<Loading />
					</div>
				{/snippet}
			</svelte:boundary>
		</div>
	</div>
</div>
