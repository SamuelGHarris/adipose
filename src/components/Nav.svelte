<script lang="ts">
	import { fade } from 'svelte/transition';

	import { clickOutside } from '$lib/attachments';

	import DarkModeToggle from './DarkModeToggle.svelte';
	import AdiposeLogo from './AdiposeLogo.svelte';
	import SignOut from './auth/SignOut.svelte';

	type Props = {
		avatar: string | null | undefined;
		class?: string;
	};
	let { avatar, class: className }: Props = $props();

	let isDropdownShowing = $state(false);
</script>

<div class="bg-base-300 sticky top-0 flex w-full shadow-md {className}">
	<div class="relative flex w-full items-center justify-between px-4 py-2">
		<button class="font-doto text-primary flex cursor-pointer gap-4 text-3xl font-[900]">
			<AdiposeLogo class="w-10" />
			Adipose</button
		>
		<div class="flex items-center gap-4">
			<DarkModeToggle />
			<button
				class="bg-base-100 h-10 w-10 cursor-pointer overflow-hidden rounded-md"
				onclick={() => (isDropdownShowing = !isDropdownShowing)}
			>
				{#if !avatar}
					<img class="h-full w-full" src={avatar} alt="User avatar" />
				{:else}
					<span class="font-doto text-secondary h-full w-full font-[900]">?</span>
				{/if}
			</button>
		</div>
		{#if isDropdownShowing}
			<div
				{@attach clickOutside(() => (isDropdownShowing = false))}
				transition:fade={{ duration: 100 }}
				class="bg-base-300 absolute top-full right-0 w-full p-2 sm:w-64"
			>
				<SignOut class="w-full" />
			</div>
		{/if}
	</div>
</div>
