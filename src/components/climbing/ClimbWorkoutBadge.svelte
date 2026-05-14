<script lang="ts">
	type Props = {
		size?: 'md' | 'xl';
		isFullLabel?: boolean;
	};

	const { size = 'md', isFullLabel = false }: Props = $props();

	const sizeClasses = $derived.by(() => {
		switch (size) {
			case 'md':
				return 'px-1 py-0.5 pt-1';
			case 'xl':
				return 'px-2 py-1 pt-1.5 text-lg';
			default:
				return undefined;
		}
	});
</script>

<div
	class="text-primary-content bg-primary border-base-content/25 flex h-fit w-fit items-center justify-center rounded-sm border leading-none font-semibold {sizeClasses}"
>
	CLIMB{isFullLabel ? 'ING WORKOUT' : ''}
</div>
