<script lang="ts">
	import type { Snippet } from 'svelte';

	import { greetings } from '$lib/greetings';

	import AdiposeLogo from '$components/AdiposeLogo.svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();

	const getRandom = (max: number): number => Math.floor(Math.random() * (max + 1));

	const greeting = $derived(greetings[Math.floor(Math.random() * greetings.length)]);
</script>

<div class="flex h-dvh w-dvw flex-col items-center justify-center gap-4 px-4">
	<AdiposeLogo makeHeadFloat class="w-30" />
	<div class="chat chat-start pb-4 whitespace-nowrap">
		<p class="chat-bubble font-doto text-md max-w-2xl text-center font-black shadow-sm">
			{greeting}
		</p>
	</div>
	{@render children()}
</div>
