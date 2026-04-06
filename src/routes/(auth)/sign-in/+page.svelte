<script lang="ts">
	import z from 'zod';
	import { goto } from '$app/navigation';

	import { authClient } from '$lib/auth/client';

	import GithubOAuth from '$components/auth/GithubOAuth.svelte';
	import Loading from '$components/Loading.svelte';

	const schema = z.object({
		email: z.email({ message: 'Please provide a valid email' }),
		password: z.string({ message: 'Please provide a valid password' })
	});

	let email = $state<string | null>(null);
	let password = $state<string | null>(null);
	let hasUserTriedToSubmit = $state(false);
	let submitInProgress = $state(false);

	const validateForm = (email: string | null, password: string | null) => {
		const error = schema.safeParse({ email, password })?.error;
		if (!error) return undefined;
		return z.treeifyError(error).properties;
	};
	const errors = $derived(hasUserTriedToSubmit ? validateForm(email, password) : undefined);
	const { emailError, passwordError } = $derived({
		emailError: errors?.email?.errors?.[0],
		passwordError: errors?.password?.errors?.[0]
	});

	const submit = async () => {
		hasUserTriedToSubmit = true;
		if (submitInProgress || !email || !password || errors) return;
		submitInProgress = true;
		await authClient.signIn.email({
			email,
			password,
			callbackURL: '/'
		});
		submitInProgress = false;
	};
</script>

<div class="flex flex-col items-center">
	<p
		class="font-doto flex w-full flex-wrap items-center justify-center pb-4 text-4xl font-extrabold whitespace-pre-wrap"
	>
		Login to <span class="text-primary pl-1 font-black">Adipose</span>.
	</p>
	<form
		class="border-base-content/25 bg-base-300 flex w-full flex-col items-center gap-2 rounded-sm border p-4 shadow-md sm:w-80"
	>
		<div class="flex w-full flex-col gap-0.5">
			<label class="flex w-full flex-col gap-0.5 text-sm font-medium">
				Email
				<input
					bind:value={email}
					type="email"
					aria-invalid={!!emailError}
					class={['input input-md w-full', emailError && 'input-error']}
					placeholder="obesity@gmail.com"
				/>
			</label>
			{#if emailError}
				<p class="text-error text-xs">{emailError}</p>
			{/if}
		</div>
		<div class="flex w-full flex-col gap-0.5 pb-2">
			<label class="flex w-full flex-col gap-0.5 text-sm font-medium">
				Password
				<input
					bind:value={password}
					type="password"
					aria-invalid={!!passwordError}
					class={['input input-md w-full', passwordError && 'input-error']}
					placeholder="password"
				/>
			</label>
			{#if passwordError}
				<p class="text-error text-xs">{passwordError}</p>
			{/if}
		</div>
		<button onclick={submit} class="btn btn-md btn-primary w-full">
			{#if submitInProgress}
				<Loading size="sm" color="bg-primary-content" />
			{:else}
				Login
			{/if}
		</button>
		<p class="font-doto pb-1 text-lg font-black">......................</p>
		<div class="flex w-full flex-col items-center">
			<GithubOAuth class="btn-primary btn-outline" />
		</div>
	</form>
	<button onclick={() => goto('/sign-up')} class="btn btn-sm btn-link btn-accent w-full sm:w-80"
		>I'm new to Adipose</button
	>
</div>
