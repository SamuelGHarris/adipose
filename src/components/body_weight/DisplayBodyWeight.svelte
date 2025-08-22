<script lang="ts">
	import type { BodyWeight } from '@prisma/client';
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { subDays, format } from 'date-fns';

	type Props = {
		data: Omit<BodyWeight, 'UserId'>[];
	};
	let { data }: Props = $props();
	let chart: null | HTMLCanvasElement = null;

	const createChart = (ref: null | HTMLCanvasElement) => {
		if (chart === null) return;
		new Chart(chart, {
			type: 'line',
			data: {
				labels: data.map((row) => format(new Date(row.dateTime), 'MM-dd HH:mm')),
				datasets: [
					{
						label: '2025',
						data: data.map((row) => row.weight)
					}
				]
			},
			options: {
				plugins: {
					tooltip: {
						callbacks: {
							label: (item) => `${item.raw} lbs`
						}
					}
				}
			}
		});
	};

	$effect(() => {
		createChart(chart);
	});
</script>

<div class="jusitfy-center bg-base-300 content flex h-90 w-180 items-center rounded-md text-base">
	<canvas bind:this={chart} id="body-weight"></canvas>
</div>
