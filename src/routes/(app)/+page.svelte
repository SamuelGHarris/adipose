<script lang="ts">
	import { IconCliffJumping } from '@tabler/icons-svelte';

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
		<div class="bg-base-300 border-base-content/25 flex h-40 w-full flex-col rounded-sm border p-2">
			<div class="flex w-full">
				<div
					class="text-primary font-doto border-base-content/25 flex items-center justify-center gap-1 rounded-sm border p-1 text-2xl leading-0 font-black"
				>
					<IconCliffJumping size={22} />
					CLIMB
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
