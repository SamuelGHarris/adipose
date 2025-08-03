<script lang="ts">
	type Props = {
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		color?: string;
	};

	let { size = 'md', color = 'bg-primary' }: Props = $props();

	let sizeClasses = $state<undefined | string>(undefined);
	if (size === 'xs') {
		sizeClasses = 'w-1 h-1';
	} else if (size === 'sm') {
		sizeClasses = 'w-1.5 h-1.5';
	} else if (size === 'md') {
		sizeClasses = 'w-2 h-2';
	} else if (size === 'lg') {
		sizeClasses = 'w-2.5 h-2.5';
	} else if (size === 'xl') {
		sizeClasses = 'w-3 h-3';
	}
</script>

<!-- @component Just a loading indicator -->
<div class="flex items-center justify-center gap-[.05rem]">
	<div class="{sizeClasses} {color} loading-square"></div>
	<div class="{sizeClasses} {color} loading-square"></div>
	<div class="{sizeClasses} {color} loading-square"></div>
</div>

<style>
	.loading-square {
		animation: disappear 2s ease-in-out infinite;
	}
	.loading-square:nth-of-type(2) {
		animation-delay: 0.5s;
	}
	.loading-square:nth-of-type(3) {
		animation-delay: 1s;
	}
	@keyframes disappear {
		0% {
			opacity: 100%;
		}
		50% {
			opacity: 20%;
		}
		100% {
			opacity: 100%;
		}
	}
</style>
