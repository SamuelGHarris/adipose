<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';
	import AdiposeLogo from './AdiposeLogo.svelte';

	type Props = {
		avatar: string | null | undefined;
		class?: string;
	};
	let { avatar, class: className }: Props = $props();
</script>

<div
	class="bg-base-300 sticky top-0 flex w-full items-center justify-between px-4 py-2 shadow-md {className}"
>
	<button class=" font-doto text-primary flex cursor-pointer gap-4 text-3xl font-[900]">
		<AdiposeLogo class="w-10" />
		Adipose</button
	>
	<div class="flex items-center gap-4">
		<DarkModeToggle />
		<img class="h-10 w-10 rounded-md" src={avatar} alt="User avatar" />
	</div>
</div>
