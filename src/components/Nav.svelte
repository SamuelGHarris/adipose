<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';

	type Props = {
		avatar: string;
	};
	let { avatar } = $props();
</script>

<div class="flex w-full items-center justify-between">
	<button class="btn btn-xl btn-ghost font-doto text-3xl font-[900]">Adipose</button>
	<div class="flex items-center gap-4">
		<DarkModeToggle />
		<img class="mr-5 h-10 w-10 rounded-full shadow-lg" src={avatar} alt="User avatar" />
	</div>
</div>
