<script lang="ts">
	import '../app.css';

	import SignIn from '$components/auth/SignIn.svelte';
	import Nav from '$components/Nav.svelte';

	let { data, children } = $props();
</script>

<div class="bg-base-100 font-roboto h-screen w-screen">
	{#if !data?.session?.user?.id}
		<div class="flex h-full w-full items-center justify-center">
			<SignIn />
		</div>
	{:else}
		<Nav avatar={data.session.user.image} />
		{@render children()}
	{/if}
</div>
