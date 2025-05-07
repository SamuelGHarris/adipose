<script lang="ts">
	import SignIn from '$components/auth/SignIn.svelte';

	let { data } = $props();
	$inspect(data);
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
	{#if data.session === null || !data.session.user}
		<SignIn />
	{:else}
		<img src={data.session.user.image} alt="Profile avatar" />
		<p>Hello {data.session.user.name}</p>
	{/if}
</div>
