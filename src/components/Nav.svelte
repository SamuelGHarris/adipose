<script lang="ts">
	import { fade } from 'svelte/transition';

	import { clickOutside } from '$lib/attachments';

	import DarkModeToggle from './DarkModeToggle.svelte';
	import AdiposeLogo from './AdiposeLogo.svelte';
	import SignOut from './auth/SignOut.svelte';
	import { IconMoodTongueWink2 } from '@tabler/icons-svelte';

	type Props = {
		name: string;
		avatar: string | null | undefined;
		class?: string;
	};
	const { name, avatar, class: className }: Props = $props();
	let isDropdownShowing = $state(false);
</script>

<div
	class="bg-base-300 border-base-content/25 sticky top-0 flex w-full border-b shadow-md {className}"
>
	<div class="relative flex w-full items-center justify-between px-4 py-2">
		<button class="font-doto text-primary flex cursor-pointer gap-4 text-3xl font-black">
			<AdiposeLogo class="w-10" />
			Adipose.</button
		>
		<div class="flex items-center gap-4">
			<DarkModeToggle />
			<button
				class="bg-base-100 h-10 w-10 cursor-pointer overflow-hidden rounded-md"
				onclick={() => (isDropdownShowing = !isDropdownShowing)}
			>
				{#if avatar}
					<img class="h-full w-full" src={avatar} alt="User avatar" />
				{:else}
					<span class="font-doto text-accent h-full w-full text-2xl font-black"
						>{name.charAt(0).toUpperCase()}</span
					>
				{/if}
			</button>
		</div>
		{#if isDropdownShowing}
			<div class="absolute top-full right-0 w-full p-2 sm:w-64">
				<div
					{@attach clickOutside(() => (isDropdownShowing = false))}
					transition:fade={{ duration: 100 }}
					class="bg-base-300 border-base-content/25 flex w-full flex-col gap-2 rounded-sm border p-2"
				>
					<div class="flex w-full items-center gap-1">
						<IconMoodTongueWink2 />
						<p title={name} class="flex-1 truncate text-sm font-medium">
							{name}
						</p>
					</div>

					<SignOut class="w-full" />
				</div>
			</div>
		{/if}
	</div>
</div>
