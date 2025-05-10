<script lang="ts">
	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<!-- @component Logo of Adipose app. Pass styling with class -->
<img class="w-30 {className}" src="/AdiposeLogoLowRes.png" alt="Adipose logo" />
