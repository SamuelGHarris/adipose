<script lang="ts">
	import { IconMoonFilled, IconSunFilled } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	type Themes = null | 'dark' | 'light';

	let theme = $state<Themes>(null);

	onMount(() => {
		// Does local storage have a theme?
		const storedTheme = localStorage.getItem('data-theme');
		// Provide browser default
		if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) theme = storedTheme;
		else {
			// Else see what the browser default is set to
			theme =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
		}
	});

	$effect(() => {
		applyTheme(theme);
	});

	const onclick = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		theme = newTheme;
		localStorage.setItem('data-theme', newTheme);
	};

	const applyTheme = (theme: Themes) => {
		const container = document.getElementById('root');
		if (!container || !theme) return;
		container.setAttribute('data-theme', theme);
	};
</script>

<!-- @component Handles the setting and toggling of the application theme -->
<button {onclick} class="btn btn-square btn-md btn-ghost">
	{#if theme === 'dark'}
		<IconMoonFilled size={25} />
	{:else}
		<IconSunFilled size={25} />
	{/if}
</button>
