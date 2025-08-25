<script lang="ts">
	import type { BodyWeight } from '@prisma/client';
	import RecordBodyWeight from './body_weight/RecordBodyWeight.svelte';

	type Props = {
		bodyWeightData: Omit<BodyWeight, 'UserId'>[];
		class?: string;
	};

	let { bodyWeightData, class: className }: Props = $props();
</script>

<div class={className}>
	<!-- <DisplayBodyWeight data={bodyWeightData} /> -->
	<!-- <RecordBodyWeight class="w-60" /> -->
	<div class="p-4 w-full h-full flex flex-col items-center">
		<div class="rounded w-full flex py-2 shadow-2xl bg-base-300 font-bold font-doto text-lg">
			<span class="flex-1 text-center">Weight</span>
			<span class="flex-1 text-center">Date</span>
		</div>
		<div class="flex-1 w-full bg-base-200">

		</div>
	</div>

</div>
