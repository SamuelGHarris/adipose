<script lang="ts">
	import { goto } from '$app/navigation';

	import GithubOAuth from '$components/auth/GithubOAuth.svelte';
</script>

<div class="flex flex-col items-center">
	<p
		class="font-doto flex w-full flex-wrap items-center justify-center pb-4 text-4xl font-extrabold whitespace-pre-wrap"
	>
		Login to <span class="text-primary pl-1 font-black">Adipose</span>.
	</p>
	<div
		class="border-base-content/25 bg-base-300 flex w-full flex-col items-center gap-2 rounded-sm border p-4 shadow-md sm:w-80"
	>
		<label class="flex w-full flex-col gap-0.5 text-sm">
			Email
			<input type="text" class="input input-md w-full" placeholder="obesity@gmail.com" />
		</label>
		<label class="flex w-full flex-col gap-0.5 pb-1 text-sm">
			Password
			<input type="password" class="input input-md w-full" placeholder="password" />
		</label>
		<button class="btn btn-md btn-primary w-full">Login</button>
		<p class="font-doto pb-1 text-lg font-black">......................</p>
		<div class="flex w-full flex-col items-center">
			<GithubOAuth class="btn-primary btn-outline" />
		</div>
	</div>
	<button onclick={() => goto('/sign-up')} class="btn btn-sm btn-link btn-accent w-full sm:w-80"
		>I'm new to Adipose</button
	>
</div>
