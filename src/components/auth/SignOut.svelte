<script lang="ts">
	import { authClient } from '$lib/auth/client';
	import { IconLogout } from '@tabler/icons-svelte';
</script>

<button class="btn btn-sm btn-accent" onclick={() => authClient.signOut()}>
	<IconLogout size={18} />
	<span class="text-nowrap">Sign out</span>
</button>
