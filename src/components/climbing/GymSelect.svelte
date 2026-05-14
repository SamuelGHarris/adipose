<script lang="ts">
	import { Gym } from './models';

	type Props = {
		value: Gym;
		class?: string;
	};

	let { value = $bindable(), class: className }: Props = $props();
</script>

<select bind:value class="select select-sm w-fit {className}">
	{#each Object.values(Gym) as gym (gym)}
		<option value={gym} >{gym.toUpperCase()}</option>
	{/each}
</select>
