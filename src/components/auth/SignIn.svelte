<script lang="ts">
	import GithubOAuth from './GithubOAuth.svelte';
</script>

<!-- @component Card which contains all sign-in options -->
<div class="flex w-full flex-col items-center justify-center gap-8">
	<p class="text-4xl">We've been expecting you.</p>
	<div class="w-80 p-4 max-sm:w-full">
		<div class="bg-base-300 w-full rounded-md p-4">
			<GithubOAuth />
		</div>
	</div>
</div>
