<script lang="ts">
	import { ClimbingType } from "$lib/prisma/enums";
	import { climbingTypeToString } from "./utils";
  
	type Props = {
		value: ClimbingType;
		class?: string;
	};

	let { value = $bindable(), class: className }: Props = $props();
</script>

<select bind:value class="select select-sm w-fit {className}">
	{#each Object.values(ClimbingType) as type (type)}
		<option value={type} >{climbingTypeToString(type)}</option>
	{/each}
</select>
