<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<form
	class="bg-base-200 text-base-content flex flex-col items-center gap-4 rounded-md p-8 {className}"
>
	<div class="bg-secondary h-10 w-10 rounded-full"></div>
	<p class="text-center text-2xl">Get started with your account</p>
	<p class="text-xs font-light">
		Already have an account?
		<a class="link link-secondary" href="test">Log in</a>
	</p>
	<div class="flex w-full flex-col gap-2">
		<label class="flex w-full flex-col items-start gap-1 text-sm">
			Email
			<input class="input input-sm" />
		</label>
		<label class="flex w-full flex-col items-start gap-1 text-sm">
			Username
			<input class="input input-sm" />
		</label>
		<label class="flex w-full flex-col items-start gap-1 text-sm">
			Password
			<input class="input input-sm" />
		</label>
	</div>
	<button class="btn btn-sm btn-primary mt-4">Lets Go!</button>
</form>
