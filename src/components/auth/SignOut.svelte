<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { IconLogout } from '@tabler/icons-svelte';
</script>

<button class="btn btn-sm btn-accent" onclick={() => signOut()}>
	<IconLogout size={18} />
	<span class="text-nowrap">Sign out</span>
</button>
