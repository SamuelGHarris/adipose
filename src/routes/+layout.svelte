<script lang="ts">
	import '../app.css';

	import { authClient } from "$lib/auth/client"; 

	import SignIn from '$components/auth/SignIn.svelte';
	import Nav from '$components/Nav.svelte';
	import Controls from '$components/Controls.svelte';

	let { children } = $props();
	const session = authClient.useSession(); 
	const user = $derived($session.data?.user);
	$inspect(user);
</script>

<svelte:head>
	<title>Adipose</title>
</svelte:head>

<div class="bg-base-100 font-roboto relative flex h-dvh w-dvw flex-col">
	{#if user}
		<Nav avatar={user.image} />
		<div class="flex-1 overflow-hidden">
			<!-- {@render children()} -->
		</div>
		<!-- <Controls class="absolute right-0 bottom-0 p-4" /> -->
	{:else}
		<div class="flex h-full w-full items-center justify-center">
			<SignIn />
		</div>
	{/if}
</div>
