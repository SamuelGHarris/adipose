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
</div>
