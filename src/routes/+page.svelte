<script lang="ts">
	// import DisplayBodyWeight from '$components/body_weight/DisplayBodyWeight.svelte';
	import Dashboard from '$components/Dashboard.svelte';
	let { data } = $props();
</script>

<div class="flex h-full w-screen items-center justify-center">
	<!-- <DisplayBodyWeight /> -->
	<Dashboard />
</div>
