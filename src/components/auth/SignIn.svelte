<script lang="ts">
	import GithubOAuth from './GithubOAuth.svelte';
	import AdiposeLogo from '$components/AdiposeLogo.svelte';
</script>

<!-- @component Card which contains all sign-in options -->
<div class="flex w-full flex-col items-center justify-center gap-4 px-4">
	<AdiposeLogo makeHeadFloat class="w-30" />
	<div class="chat chat-start whitespace-nowrap">
		<p class="chat-bubble font-doto max-w-2xl text-center text-lg font-[900] shadow-sm">
			We've been expecting you.
		</p>
	</div>
	<p
		class="font-doto flex w-full flex-wrap items-center justify-center pt-8 text-4xl font-extrabold whitespace-pre-wrap"
	>
		Login to <span class="text-primary pl-1 font-[900]">Adipose</span>.
	</p>
	<div
		class="border-base-content/25 bg-base-300 flex w-full flex-col items-center gap-2 rounded-sm border p-4 shadow-md sm:w-80"
	>
		<label class="flex w-full flex-col gap-0.5 text-sm">
			Email
			<input type="text" class="input input-md w-full" placeholder="obesity@gmail.com" />
		</label>
		<label class="flex w-full flex-col gap-0.5 text-sm">
			Password
			<input type="password" class="input input-md w-full" placeholder="password" />
		</label>
		<button class="btn btn-md btn-neutral w-full">Login</button>
		<p class="font-doto pb-1 text-lg font-[900]">......................</p>
		<div class="flex w-full flex-col items-center">
			<GithubOAuth />
		</div>
	</div>
</div>
