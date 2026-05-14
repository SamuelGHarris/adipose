<script lang="ts">
	import { untrack } from 'svelte';
	import { ClimbingType, WallProfile, ClimbingResult, DifficultyFeel } from '$lib/prisma/enums';
	import type { Prisma } from '$lib/prisma/client';
	import ClimbWorkoutBadge from '$components/climbing/ClimbWorkoutBadge.svelte';
	import { IconAt } from '@tabler/icons-svelte';
	import GymSelect from '$components/climbing/GymSelect.svelte';
	import { Gym } from '$components/climbing/models';
	import { format } from 'date-fns';
	// import { authClient } from "$lib/auth/client"

	type Props = {
		userId: string;
	};

	const { userId }: Props = $props();

	// const data = $state<Prisma.ClimbingWorkoutUncheckedCreateInput>({
	// 	userId: untrack(() => userId),
	// 	isOutdoor: false,
	// 	location: Gym.MovementCentennial,
	// 	climbs: { create: [] }
	// });
	// $effect(() => {
	// 	data.userId = userId;
	// })
	let location = $state(Gym.MovementCentennial);
	let startDateTime = new Date();
</script>

<div class="flex h-full w-full flex-col items-center p-2">
	<div class="flex w-full flex-1 flex-col gap-2 p-2 sm:w-4/5 lg:w-1/3">
		<div class="flex w-full items-center gap-2">
			<ClimbWorkoutBadge size="xl" />
			<IconAt size={18} />
			<GymSelect bind:value={location} />
		</div>
		<p class="text-base-content/60 text-xs">{format(startDateTime, 'pp MM/dd/yyyy')}</p>
		<div
			class="bg-base-300 border-base-content/25 flex h-40 w-full flex-col rounded-sm border"
		></div>
	</div>
</div>
