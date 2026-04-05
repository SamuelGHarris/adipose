<script lang="ts">
	// import DisplayBodyWeight from '$components/body_weight/DisplayBodyWeight.svelte';
	import Dashboard from '$components/Dashboard.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	const { data }: Props = $props();
</script>

<div class="flex h-full w-screen flex-col items-center justify-center">
	<div class="w-full flex-1"></div>
	<div class="pb-8">
		<button class="btn btn-lg btn-primary font-doto text-2xl font-black uppercase"
			>Start Session</button
		>
	</div>
	<!-- <DisplayBodyWeight /> -->
	<!-- <Dashboard class="h-full w-full" bodyWeightData={[]} /> -->
</div>
