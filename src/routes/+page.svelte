<script lang="ts">
	import DisplayBodyWeight from '$components/body_weight/DisplayBodyWeight.svelte';
	let { data } = $props();
</script>

<div class="flex h-full w-screen items-center justify-center">
	<DisplayBodyWeight />
</div>
