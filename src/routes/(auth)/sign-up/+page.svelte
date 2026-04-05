<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col items-center">
	<p
		class="font-doto flex w-full flex-wrap items-center justify-center pb-4 text-4xl font-extrabold whitespace-pre-wrap"
	>
		Create Account.
	</p>
	<div
		class="border-base-content/25 bg-base-300 flex w-full flex-col items-center gap-2 rounded-sm border p-4 shadow-md sm:w-80"
	>
		<label class="flex w-full flex-col gap-0.5 text-sm">
			Name
			<input type="text" class="input input-md w-full" placeholder="John" />
		</label>
		<label class="flex w-full flex-col gap-0.5 text-sm">
			Email
			<input type="text" class="input input-md w-full" placeholder="obesity@gmail.com" />
		</label>
		<label class="flex w-full flex-col gap-0.5 pb-1 text-sm">
			Password
			<input type="password" class="input input-md w-full" placeholder="password" />
		</label>
		<button class="btn btn-md btn-primary w-full">Submit</button>
	</div>
	<button onclick={() => goto('/sign-in')} class="btn btn-sm btn-link btn-accent w-full sm:w-80"
		>Back to Login</button
	>
</div>
