<script lang="ts">
	import z from 'zod';
	import { goto } from '$app/navigation';

	import { authClient } from '$lib/auth/client';
	import Loading from '$components/Loading.svelte';

	const schema = z
		.object({
			name: z
				.string({ message: 'Please type a valid name' })
				.nonempty({ message: 'This cannot be empty' }),
			email: z.email({ message: 'Please type a valid email' }),
			password: z
				.string({ message: 'Please type a valid password' })
				.min(8, { message: 'Must be at least 8 characters' })
				.max(20, { message: 'Must be less than 20 characters' })
				.refine((val) => /[A-Z]/.test(val), {
					message: 'Must contain at least one uppercase letter'
				})
				.refine((val) => /[a-z]/.test(val), {
					message: 'Must contain at least one lowercase letter'
				})
				.refine((val) => /[0-9]/.test(val), {
					message: 'Must contain at least one number'
				})
				.refine((val) => /[^A-Za-z0-9]/.test(val), {
					message: 'Must contain at least one special character'
				}),
			confirmPassword: z.string({ message: 'Please type your password a second time' })
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: 'Passwords do not match',
			path: ['confirmPassword']
		});

	let name = $state<string | null>(null);
	let email = $state<string | null>(null);
	let password = $state<string | null>(null);
	let confirmPassword = $state<string | null>(null);
	let hasUserTriedToSubmit = $state(false);
	let submitInProgress = $state(false);

	const validateForm = (
		name: string | null,
		email: string | null,
		password: string | null,
		confirmPassword: string | null
	) => {
		const error = schema.safeParse({ name, email, password, confirmPassword })?.error;
		if (!error) return undefined;
		return z.treeifyError(error).properties;
	};
	const errors = $derived(
		hasUserTriedToSubmit ? validateForm(name, email, password, confirmPassword) : undefined
	);
	const { nameError, emailError, passwordError, confirmPasswordError } = $derived({
		nameError: errors?.name?.errors?.[0],
		emailError: errors?.email?.errors?.[0],
		passwordError: errors?.password?.errors?.[0],
		confirmPasswordError: errors?.confirmPassword?.errors?.[0]
	});

	const submit = async () => {
		hasUserTriedToSubmit = true;
		if (submitInProgress || !name || !email || !password || !confirmPassword || errors) return;
		submitInProgress = true;
		await authClient.signUp.email({
			name,
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
		Create Account.
	</p>
	<form
		class="border-base-content/25 bg-base-300 flex w-full flex-col items-center gap-2 rounded-sm border p-4 shadow-md sm:w-80"
	>
		<div class="flex w-full flex-col gap-0.5">
			<label class="flex w-full flex-col gap-0.5 text-sm font-medium">
				Name
				<input
					bind:value={name}
					aria-invalid={!!nameError}
					type="text"
					class={['input input-md w-full', nameError && 'input-error']}
					placeholder="John"
				/>
			</label>
			{#if nameError}
				<p class="text-error text-xs">{nameError}</p>
			{/if}
		</div>
		<div class="flex w-full flex-col gap-0.5">
			<label class="flex w-full flex-col gap-0.5 text-sm font-medium">
				Email
				<input
					bind:value={email}
					aria-invalid={!!emailError}
					type="email"
					class={['input input-md w-full', emailError && 'input-error']}
					placeholder="obesity@gmail.com"
				/>
			</label>
			{#if emailError}
				<p class="text-error text-xs">{emailError}</p>
			{/if}
		</div>
		<div class="flex w-full flex-col gap-0.5">
			<label class="flex w-full flex-col gap-0.5 text-sm font-medium">
				Password
				<input
					bind:value={password}
					aria-invalid={!!passwordError}
					type="password"
					class={['input input-md w-full', passwordError && 'input-error']}
					placeholder="password"
				/>
			</label>
			{#if passwordError}
				<p class="text-error text-xs">{passwordError}</p>
			{/if}
		</div>
		<div class="flex w-full flex-col gap-0.5 pb-2">
			<label class="flex w-full flex-col gap-0.5 text-sm font-medium">
				Confirm Password
				<input
					bind:value={confirmPassword}
					aria-invalid={!!confirmPasswordError}
					type="password"
					class={['input input-md w-full', confirmPasswordError && 'input-error']}
					placeholder="password"
				/>
			</label>
			{#if confirmPasswordError}
				<p class="text-error text-xs">{confirmPasswordError}</p>
			{/if}
		</div>
		<button onclick={submit} class="btn btn-md btn-primary w-full">
			{#if submitInProgress}
				<Loading size="sm" color="bg-primary-content" />
			{:else}
				Submit
			{/if}
		</button>
	</form>
	<button onclick={() => goto('/sign-in')} class="btn btn-sm btn-link btn-accent w-full sm:w-80"
		>Back to Login</button
	>
</div>
