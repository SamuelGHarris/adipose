<script lang="ts">
	import { format } from 'date-fns';
	import { IconAt } from '@tabler/icons-svelte';

	import ClimbWorkoutBadge from '$components/climbing/ClimbWorkoutBadge.svelte';
	import GymSelect from '$components/climbing/GymSelect.svelte';
	import { Gym } from '$components/climbing/models';
	import ClimbTypeSelect from '$components/climbing/ClimbTypeSelect.svelte';
	import { ClimbingType } from '$lib/prisma/enums';

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
	let climbingType = $state(ClimbingType.TOP_ROPE);
	let startDateTime = new Date();
</script>

<div class="flex h-full w-full flex-col items-center p-2">
	<div class="flex w-full flex-1 flex-col gap-2 p-2 sm:w-4/5 lg:w-1/3">
		<div class="flex w-full items-center gap-2">
			<ClimbWorkoutBadge size="xl" />
			<IconAt size={18} />
			<GymSelect bind:value={location} class="flex-1" />
		</div>
		<p class="text-base-content/60 text-sm">{format(startDateTime, 'pp MM/dd/yyyy')}</p>
		<div
			class="bg-base-300 border-base-content/25 flex h-40 w-full flex-col rounded-sm border p-2 pt-0"
		>
			<div class="w-full flex justify-between items-center">
				<p>1</p>
				<label class="flex items-center gap-2 pt-2">
					Warm-up?
					<input class="checkbox" type="checkbox"/>
				</label>
			</div>
			<label class="flex flex-col gap-1 uppercase">
				Mode
				<ClimbTypeSelect bind:value={climbingType} />
			</label>
		</div>
	</div>
</div>
