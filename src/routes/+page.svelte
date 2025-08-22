<script lang="ts">
	// import DisplayBodyWeight from '$components/body_weight/DisplayBodyWeight.svelte';
	import Dashboard from '$components/Dashboard.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	const { data }: Props = $props();
</script>

<div class="flex h-full w-screen items-center justify-center">
	<!-- <DisplayBodyWeight /> -->
	<Dashboard bodyWeightData={[]} />
</div>
