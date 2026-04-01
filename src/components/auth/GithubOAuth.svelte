<script lang="ts">
	import { IconBrandGithubFilled } from '@tabler/icons-svelte';
	import { githubSignin } from '$lib/auth/client';
</script>

<button
	onclick={githubSignin}
	class="btn btn-sm text-base-content btn-neutral flex h-10 w-full items-center justify-center"
>
	<IconBrandGithubFilled />
	Sign in with GitHub
</button>
