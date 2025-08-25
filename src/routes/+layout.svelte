<script lang="ts">
	import '../app.css';

	import SignIn from '$components/auth/SignIn.svelte';
	import Nav from '$components/Nav.svelte';
	import Controls from '$components/Controls.svelte';

	let { data, children } = $props();
</script>

<svelte:head>
	<title>Adipose</title>
</svelte:head>

<div class="bg-base-100 font-roboto relative flex h-dvh w-dvw flex-col">
	{#if data.user && data.user.id}
		<Nav avatar={data.user.image} />
		{@render children()}
		<Controls class="absolute right-0 bottom-0 p-4" />
	{:else}
		<div class="flex h-full w-full items-center justify-center">
			<SignIn />
		</div>
	{/if}
</div>
