<script lang="ts">
	import { goto } from '$app/navigation';
	import { IconAt, IconCircleFilled, IconTrash } from '@tabler/icons-svelte';
	import { format } from 'date-fns';

	import type { PageData } from './$types';
	import ClimbWorkoutBadge from '$components/climbing/ClimbWorkoutBadge.svelte';

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
		<div
			class="bg-base-300 border-base-content/25 flex w-full flex-col gap-2 overflow-hidden rounded-sm border p-2 shadow-md"
		>
			<div class="relative flex w-full flex-col gap-2">
				<div class="flex w-full items-center justify-between">
					<ClimbWorkoutBadge />
					<div class="mr-auto flex items-center gap-1 pl-2 text-sm font-semibold">
						<IconAt stroke={2.6} size={15} />
						CENTINNEAL MOVEMENT
					</div>
				</div>
				<div class="flex items-center gap-2 text-sm leading-none font-semibold">
					<span>TOP ROPE</span>
					<IconCircleFilled size={5} class="mb-0.5" />
					<span>ENDURANCE</span>
				</div>
				<p class="text-base-content/60 text-xs">{format(new Date(), 'pp MM/dd/yyyy')}</p>
				<button class="btn btn-sm btn-square btn-error absolute top-0 right-0"
					><IconTrash stroke={2} size={20} /></button
				>
			</div>
			<div
				class="border-base-content/25 divide-base-content/25 flex w-full flex-col divide-y overflow-hidden rounded border"
			>
				<div class="divide-base-content/25 bg-base-200 flex items-center gap-2 divide-x">
					<div class="flex flex-1 items-center justify-start">
						<div class="flex flex-col gap-1 p-2 text-sm leading-none">
							<span class="font-semibold">REPS</span>
							<div class="text-base-content/60 flex items-center gap-1 leading-none">
								<span>4</span>
								<span>x</span>
								<span>4</span>
								<span>x</span>
								<span>3</span>
							</div>
						</div>
					</div>
					<div class="flex flex-1 items-center justify-start">
						<div class="flex flex-col gap-1 text-sm leading-none">
							<span class="font-semibold">GRADE</span>
							<div class="text-base-content/60 flex items-center gap-1">
								<span>5.10d</span>
								<span>-</span>
								<span>5.11a</span>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-base-200 flex w-full items-center justify-start p-2 leading-none">
					<div class="flex flex-col gap-1 text-sm leading-none">
						<span class="font-semibold">NOTE</span>
						<span class="text-base-content/60">This was very hard!</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="pb-8">
		<button
			onclick={() => goto('/session/create')}
			class="btn btn-lg btn-primary font-doto px-4 pl-6 text-2xl font-black uppercase"
			>New Session.</button
		>
	</div>
</div>
