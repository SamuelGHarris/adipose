<script lang="ts">
	import { type Snippet } from 'svelte';
	import { signIn } from '@auth/sveltekit/client';

	type Props = {
		/** ProviderId string - Ex "github" */
		providerId: string;
		/** Contents of the button */
		children: Snippet;
		class?: string;
	};
	let { providerId, children, class: className }: Props = $props();
</script>

<button class="btn btn-sm {className}" onclick={() => signIn(providerId)}>
	{@render children?.()}
</button>
