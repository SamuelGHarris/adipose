<script lang="ts">
	import { fade } from 'svelte/transition';

	import DarkModeToggle from './DarkModeToggle.svelte';
	import AdiposeLogo from './AdiposeLogo.svelte';
	import SignOut from './auth/SignOut.svelte';

	type Props = {
		avatar: string | null | undefined;
		class?: string;
	};
	let { avatar, class: className }: Props = $props();

	let isDropdownShowing = $state(false);
	let dropdown = $state<undefined | HTMLElement>();
</script>

<!-- TODO: Figure out a way to do this with actions in svelte 5 -->
<svelte:window
	onclick={(e) => {
		if (
			isDropdownShowing &&
			dropdown !== undefined &&
			!dropdown.contains(e.target as HTMLElement)
		) {
			isDropdownShowing = false;
		}
	}}
/>

<div
	class="bg-base-300 sticky top-0 flex w-full items-center justify-between px-4 py-2 shadow-md {className}"
>
	<button class=" font-doto text-primary flex cursor-pointer gap-4 text-3xl font-[900]">
		<AdiposeLogo class="w-10" />
		Adipose</button
	>
	<div class="flex items-center gap-4">
		<DarkModeToggle />
		<div bind:this={dropdown} class="relative">
			<button onclick={() => (isDropdownShowing = !isDropdownShowing)}>
				<img class="h-10 w-10 rounded-md" src={avatar} alt="User avatar" />
			</button>
			{#if isDropdownShowing}
				<div transition:fade={{ duration: 100 }} class="absolute right-0 mt-6">
					<SignOut />
				</div>
			{/if}
		</div>
	</div>
</div>
