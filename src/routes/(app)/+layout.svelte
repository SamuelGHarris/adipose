<script lang="ts">
	import Nav from '$components/Nav.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	type Props = {
		data: LayoutData;
		children: Snippet;
	};

	let { data, children }: Props = $props();
</script>

<div class="bg-base-100 font-roboto relative flex h-dvh w-dvw flex-col">
	<Nav avatar={data.user.image} />
	<div class="flex-1 overflow-hidden">
		{@render children()}
	</div>
</div>
