<script lang="ts">
	import { IconAt, IconBuilding, IconCliffJumping, IconEdit, IconLadder, IconRotate360, IconTrash, IconX } from '@tabler/icons-svelte';
	import { format } from 'date-fns';

	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	const { data }: Props = $props();

	/** Thinking of climb type
	 * grade: 5-A, 5-B, etc (enum)
	 * reps: number
	 * firstTimeOnRoute: boolean
	 * 
	*/
</script>

<div class="flex h-full w-screen flex-col items-center justify-center">
	<div class="flex w-full flex-1 flex-col p-2 sm:w-4/5 lg:w-1/2">
		<div class="bg-base-300 border-base-content/25 flex gap-2 w-full flex-col rounded-sm border p-4">
			<div class="flex w-full justify-between">
				<div
					class="text-primary-content bg-primary border-base-content/25 flex items-center justify-center rounded-sm border p-2 pl-4.5 pr-4 text-2xl leading-none font-doto font-black"
				>
					<!-- <IconCliffJumping size={22} /> -->
					ENDURANCE CLIMB.
				</div>
				<div class="text-base-content/50 font- flex items-center gap-1 pl-2 mr-auto">
					AT CENTINNEAL MOVEMENT
				</div>
				<button class="btn btn-square btn-error"><IconTrash /></button>
			</div>
			<p class="text-base-content/50 pl-2">{format(new Date(), 'pp MM/dd/yyyy')}</p>
			<div class="flex items-center gap-2">
				<div class="join">
					<span class="badge badge-primary rounded-r-none"><IconLadder size={20} /></span>
					<span class="badge badge-outline badge-primary rounded-l-none whitespace-nowrap">TOP ROPE</span>
				</div>
				<div class="join">
					<span class="badge badge-primary rounded-r-none"><IconBuilding size={20} /></span>
					<span class="badge badge-outline badge-primary rounded-l-none whitespace-nowrap">TOP ROPE</span>
				</div>
				<div class="join">
					<span class="badge badge-primary rounded-r-none"><IconRotate360 size={20}/></span>
					<span class="badge badge-outline badge-primary rounded-l-none whitespace-nowrap">4 x 4 x 3</span>
				</div>
				<div class="join">
					<span class="badge badge-primary rounded-r-none"></span>
					<span class="badge badge-outline badge-primary rounded-l-none whitespace-nowrap">10.11a - 10.12b</span>
				</div>
			</div>
		</div>
	</div>
	<div class="pb-8">
		<button class="btn btn-lg btn-primary font-doto text-2xl font-black uppercase"
			>New Session</button
		>
	</div>
</div>
