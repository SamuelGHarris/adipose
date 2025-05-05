<script lang="ts">
	import { IconBrandGithubFilled } from '@tabler/icons-svelte';

	import AuthJsSignIn from './AuthJsSignIn.svelte';
</script>

<AuthJsSignIn
	providerId="github"
	class="text-base-content btn-neutral flex h-10 w-full items-center justify-center"
>
	<IconBrandGithubFilled />
	Sign in with GitHub
</AuthJsSignIn>
