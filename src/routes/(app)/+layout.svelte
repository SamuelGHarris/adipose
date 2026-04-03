<script lang="ts">
	import Nav from '$components/Nav.svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: import('svelte').Snippet } = $props();
</script>

<div class="bg-base-100 font-roboto relative flex h-dvh w-dvw flex-col">
	<Nav avatar={data.user.image} />
	<div class="flex-1 overflow-hidden">
		{@render children()}
	</div>
</div>
