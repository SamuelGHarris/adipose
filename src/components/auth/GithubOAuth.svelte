<script lang="ts">
	import { IconBrandGithubFilled } from '@tabler/icons-svelte';

	import { authClient } from '$lib/auth/client';
	import Loading from '$components/Loading.svelte';

	type Props = {
		class?: string;
	};

	const { class: className }: Props = $props();

	let submitInProgress = $state(false);
</script>

<button
	onclick={async () => {
		submitInProgress = true;
		await authClient.signIn.social({
			provider: 'github'
		});
		submitInProgress = false;
	}}
	class="btn btn-sm btn-neutral flex h-10 w-full items-center justify-center {className}"
>
	{#if submitInProgress}
		<Loading size="sm" color="bg-primary-content" />
	{:else}
		<IconBrandGithubFilled />
		Sign in with GitHub
	{/if}
</button>
