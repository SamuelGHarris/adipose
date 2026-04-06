<script lang="ts">
	import { goto } from '$app/navigation';

	import { createUser } from '$lib/auth.remote';

	const nameError = $derived(createUser.fields.name.issues()?.[0]?.message);
	const emailError = $derived(createUser.fields.email.issues()?.[0]?.message);
	const passwordError = $derived(createUser.fields.password.issues()?.[0]?.message);
	const confirmPasswordError = $derived(createUser.fields.confirmPassword.issues()?.[0]?.message);
</script>

<div class="flex flex-col items-center">
	<p
		class="font-doto flex w-full flex-wrap items-center justify-center pb-4 text-4xl font-extrabold whitespace-pre-wrap"
	>
		Create Account.
	</p>
	<form
		{...createUser}
		class="border-base-content/25 bg-base-300 flex w-full flex-col items-center gap-2 rounded-sm border p-4 shadow-md sm:w-80"
	>
		<div class="flex w-full flex-col gap-0.5">
			<label class="flex w-full flex-col gap-0.5 text-sm font-medium">
				Name
				<input
					{...createUser.fields.name.as('text')}
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
					{...createUser.fields.email.as('email')}
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
					{...createUser.fields.password.as('password')}
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
					{...createUser.fields.confirmPassword.as('password')}
					class={['input input-md w-full', confirmPasswordError && 'input-error']}
					placeholder="password"
				/>
			</label>
			{#if confirmPasswordError}
				<p class="text-error text-xs">{confirmPasswordError}</p>
			{/if}
		</div>
		<button class="btn btn-md btn-primary w-full">Submit</button>
	</form>
	<button onclick={() => goto('/sign-in')} class="btn btn-sm btn-link btn-accent w-full sm:w-80"
		>Back to Login</button
	>
</div>
