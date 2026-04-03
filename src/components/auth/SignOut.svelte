<script lang="ts">
	import { IconLogout } from '@tabler/icons-svelte';

	import { authClient } from '$lib/auth/client';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	type Props = {
		class?: string;
	};

	const { class: className }: Props = $props();
</script>

<button
	class="btn btn-sm btn-accent {className}"
	onclick={() =>
		authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					goto('/sign-in');
				}
			}
		})}
>
	<IconLogout size={18} />
	<span class="text-nowrap">Sign out</span>
</button>
