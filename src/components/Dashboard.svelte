<script lang="ts">
	import RecordBodyWeight from './body_weight/RecordBodyWeight.svelte';

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<div class={className}>
	<RecordBodyWeight onSubmit={(weight, dateTime) => {}} />
</div>
