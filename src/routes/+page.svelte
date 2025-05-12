<script lang="ts">
	import { setContext } from 'svelte';
	import type { PageProps } from './$types';
	// import DisplayBodyWeight from '$components/body_weight/DisplayBodyWeight.svelte';
	import Dashboard from '$components/Dashboard.svelte';
	let { data, form }: PageProps = $props();
	setContext('formRecordBodyWeight', () => form?.recordBodyWeight);
</script>

<div class="flex h-full w-screen items-center justify-center">
	<!-- <DisplayBodyWeight /> -->
	<Dashboard />
</div>
