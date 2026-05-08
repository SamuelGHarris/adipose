<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const storedTheme = localStorage.getItem('data-theme');
		let theme: 'light' | 'dark';

		if (storedTheme === 'light' || storedTheme === 'dark') {
			theme = storedTheme;
		} else {
			theme =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
		}

		document.getElementById('root')?.setAttribute('data-theme', theme);
	});
</script>

<svelte:head>
	<title>Adipose</title>
</svelte:head>

{@render children()}
