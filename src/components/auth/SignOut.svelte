<script lang="ts">
	import { signOut } from '@auth/sveltekit/client';
	import { IconLogout } from '@tabler/icons-svelte';
</script>

<button class="btn btn-md btn-square" onclick={() => signOut()}>
	<IconLogout size={20} />
</button>
