<script lang="ts">
	import GithubOAuth from './GithubOAuth.svelte';
	import AdiposeLogo from '$components/AdiposeLogo.svelte';
</script>

<!-- @component Card which contains all sign-in options -->
<div class="flex w-full flex-col items-center justify-center gap-8">
	<AdiposeLogo class="w-30" />
	<p class="font-doto text-center text-4xl font-[900]">We've been expecting you.</p>
	<div class="w-80 p-4 max-sm:w-full">
		<div class="bg-base-300 w-full rounded-md p-4">
			<GithubOAuth />
			<!-- TODO: Added oauth for apple and google -->
		</div>
	</div>
</div>
