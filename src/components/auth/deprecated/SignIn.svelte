<script lang="ts">
    import { IconUserFilled } from "@tabler/icons-svelte";

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<form
	class="bg-base-200 text-base-content flex flex-col items-center gap-4 rounded-md p-8 {className}"
>
    <IconUserFilled class="text-secondary" size={50} />
	<p class="text-center text-2xl">Log in to your account</p>
	<div class="flex w-full flex-col gap-2">
        <label class="flex w-full flex-col items-start gap-1 text-sm">
			Username
			<input class="input input-sm" />
		</label>
		<label class="flex w-full flex-col items-start gap-1 text-sm">
			Password
			<input class="input input-sm" />
		</label>
	</div>
	<button class="btn btn-sm btn-primary mt-4">Log in</button>
</form>
