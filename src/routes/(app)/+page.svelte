<script lang="ts">
	import { IconAt, IconBuilding, IconCircle, IconCircleFilled, IconCliffJumping, IconEdit, IconLadder, IconMapPin, IconPin, IconRotate360, IconTrash, IconX } from '@tabler/icons-svelte';
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
		<div class="bg-base-300 border-base-content/25 flex w-full flex-col rounded-sm overflow-hidden border p-2 gap-2 shadow-md">
			<div class="flex flex-col w-full gap-2">
				<div class="flex w-full items-center justify-between">
					<div
						class="h-fit text-primary-content bg-primary border-base-content/25 flex items-center justify-center rounded-sm border leading-none font-semibold px-1 py-0.5 pt-1"
					>
						<!-- <IconCliffJumping size={22} /> -->
						CLIMB
					</div>
					<div class="text-sm font-semibold flex items-center gap-1 pl-2 mr-auto">
						<IconAt size={15}/>
						CENTINNEAL MOVEMENT
					</div>
					<button class="btn btn-xs btn-square btn-error"><IconTrash size={16} /></button>
				</div>
				<div class="flex items-center gap-2 leading-none text-sm font-semibold">
					<span>TOP ROPE</span>
					<IconCircleFilled size={5} class="mb-0.5" />
					<span>ENDURANCE</span>
				</div>
				<p class="text-base-content/60 text-xs">{format(new Date(), 'pp MM/dd/yyyy')}</p>
			</div>
			<div class="flex flex-col border border-base-content/25 divide-y divide-base-content/25 rounded w-full overflow-hidden">
				<div class="flex items-center gap-2 divide-x divide-base-content/25 bg-base-200">
					<div class="flex-1 flex items-center justify-start">
						<div class="flex flex-col p-2 text-sm leading-none gap-1">
							<span class="font-semibold">REPS</span>
							<div class="flex items-center gap-1 text-base-content/60 leading-none">
								<span>4</span>
								<span>x</span>
								<span>4</span>
								<span>x</span>
								<span>3</span>
							</div>
						</div>
					</div>
					<div class="flex-1 flex items-center justify-start">
						<div class="flex flex-col text-sm leading-none gap-1">
							<span class="font-semibold">GRADE</span>
							<div class="flex items-center gap-1 text-base-content/60">
								<span>5.10d</span>
								<span>-</span>
								<span>5.11a</span>
							</div>
						</div>
					</div>
				</div>
				<div class="w-full flex items-center justify-start p-2 leading-none bg-base-200">
					<div class="flex flex-col gap-1 text-sm leading-none">
						<span class="font-semibold">NOTE</span>
						<span class="text-base-content/60">This was very hard!</span>
					</div>
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
