<script lang="ts">
	type Props = {
		makeHeadFloat?: boolean;
		class?: string;
	};

	let { makeHeadFloat = false, class: className }: Props = $props();
</script>

<!-- @component Logo of Adipose app. Pass styling with class -->
<img
	class={[className, makeHeadFloat && 'make-float']}
	src="/AdiposeLogoLowRes.png"
	alt="Adipose logo"
/>

<style>
	.make-float {
		animation: float 4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate;
		filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
	}

	@keyframes float {
		0% {
			transform: translateY(0px) rotate(0deg) scale(1);
		}
		25% {
			transform: translateY(-8px) rotate(1deg) scale(1.01);
		}
		50% {
			transform: translateY(-14px) rotate(0deg) scale(1.02);
		}
		75% {
			transform: translateY(-8px) rotate(-1deg) scale(1.01);
		}
		100% {
			transform: translateY(-18px) rotate(0.5deg) scale(1.03);
		}
	}
</style>
