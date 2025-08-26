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
	<div class="p-4 w-full h-full flex flex-col items-center overflow-hidden">
		<div class="rounded-t-lg w-full flex py-2 shadow-2xl bg-base-300 font-bold font-doto text-lg">
			<span class="flex-1 text-center">Weight</span>
			<span class="flex-1 text-center">Date</span>
			<span class="w-10"></span>
		</div>
		<div class="flex-1 w-full rounded-b-lg overflow-y-auto divide-y-1 divide-base-content/10 px-2 bg-base-300">
			<svelte:boundary>
				{#each await getAllBodyWeights() as { id, weight, dateTime } (id)}
					<div class="w-full flex py-1 bg-base-200">
						<span class="flex-1 flex justify-center items-center">{weight} lbs</span>
						<span class="flex-1 flex justify-center items-center">{format(dateTime, 'MM/dd/yyyy hh:mm a')}</span>
						<button class="btn-square mx-2 transition-colors hover:text-error active:text-error">
							<IconX size={20} />
						</button>
					</div>
				{/each}
				{#snippet pending()}
					<div class="w-full h-full flex items-center justify-center">
						<Loading />
					</div>
				{/snippet}
			</svelte:boundary>
		</div>
	</div>

</div>
