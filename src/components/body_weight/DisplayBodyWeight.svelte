<script lang="ts">
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { subDays, format } from 'date-fns';

	const weightData = [
		{ weight: 72.5, dateTime: new Date('2025-04-01T08:30:00') },
		{ weight: 72.4, dateTime: new Date('2025-04-01T18:15:00') },
		{ weight: 72.2, dateTime: new Date('2025-04-02T09:00:00') },
		{ weight: 72.0, dateTime: new Date('2025-04-03T08:45:00') },
		{ weight: 71.9, dateTime: new Date('2025-04-03T20:00:00') },
		{ weight: 71.8, dateTime: new Date('2025-04-04T07:50:00') },
		{ weight: 71.9, dateTime: new Date('2025-04-05T08:10:00') },
		{ weight: 71.7, dateTime: new Date('2025-04-06T08:25:00') },
		{ weight: 71.6, dateTime: new Date('2025-04-07T08:35:00') },
		{ weight: 71.5, dateTime: new Date('2025-04-07T20:45:00') },
		{ weight: 71.4, dateTime: new Date('2025-04-08T08:40:00') },
		{ weight: 71.3, dateTime: new Date('2025-04-09T08:50:00') },
		{ weight: 71.2, dateTime: new Date('2025-04-09T21:00:00') },
		{ weight: 71.0, dateTime: new Date('2025-04-10T09:05:00') },
		{ weight: 70.9, dateTime: new Date('2025-04-11T08:20:00') },
		{ weight: 70.8, dateTime: new Date('2025-04-11T19:15:00') },
		{ weight: 70.7, dateTime: new Date('2025-04-12T08:30:00') },
		{ weight: 70.6, dateTime: new Date('2025-04-13T08:45:00') },
		{ weight: 70.7, dateTime: new Date('2025-04-13T18:30:00') },
		{ weight: 70.5, dateTime: new Date('2025-04-14T09:00:00') },
		{ weight: 70.4, dateTime: new Date('2025-04-15T07:50:00') },
		{ weight: 70.3, dateTime: new Date('2025-04-15T20:00:00') },
		{ weight: 70.2, dateTime: new Date('2025-04-16T08:10:00') },
		{ weight: 70.1, dateTime: new Date('2025-04-17T08:25:00') },
		{ weight: 70.0, dateTime: new Date('2025-04-18T08:35:00') },
		{ weight: 70.0, dateTime: new Date('2025-04-18T19:45:00') },
		{ weight: 69.9, dateTime: new Date('2025-04-19T08:40:00') },
		{ weight: 69.8, dateTime: new Date('2025-04-20T08:50:00') },
		{ weight: 69.7, dateTime: new Date('2025-04-21T09:05:00') },
		{ weight: 69.6, dateTime: new Date('2025-04-21T21:00:00') },
		{ weight: 69.5, dateTime: new Date('2025-04-22T08:30:00') },
		{ weight: 69.4, dateTime: new Date('2025-04-23T08:45:00') },
		{ weight: 69.4, dateTime: new Date('2025-04-23T18:30:00') },
		{ weight: 69.3, dateTime: new Date('2025-04-24T09:00:00') },
		{ weight: 69.2, dateTime: new Date('2025-04-25T07:50:00') },
		{ weight: 69.1, dateTime: new Date('2025-04-25T20:00:00') },
		{ weight: 69.0, dateTime: new Date('2025-04-26T08:10:00') },
		{ weight: 68.9, dateTime: new Date('2025-04-27T08:25:00') },
		{ weight: 68.8, dateTime: new Date('2025-04-28T08:35:00') },
		{ weight: 68.8, dateTime: new Date('2025-04-28T19:45:00') },
		{ weight: 68.7, dateTime: new Date('2025-04-29T08:40:00') },
		{ weight: 68.6, dateTime: new Date('2025-04-30T08:50:00') },
		{ weight: 68.5, dateTime: new Date('2025-05-01T09:05:00') },
		{ weight: 68.4, dateTime: new Date('2025-05-01T20:10:00') },
		{ weight: 68.3, dateTime: new Date('2025-05-02T08:20:00') },
		{ weight: 68.2, dateTime: new Date('2025-05-03T08:30:00') },
		{ weight: 68.1, dateTime: new Date('2025-05-04T08:45:00') },
		{ weight: 68.0, dateTime: new Date('2025-05-05T09:00:00') }
	];

	const getLast30Days = (): Date[] => {
		let dates: Date[] = [];
		for (let i = 0; i < 30; i++) {
			let date = new Date('2025-04-30');
			date = subDays(date, i);
			dates = [date, ...dates];
		}
		return dates;
	};

	const matchDataToLabels = (labels: Date[], data: typeof weightData) => {
		let dates: (Date | null)[] = [];
		labels.forEach((date) => {
			let flag = true;
			for (let i = 0; i < data.length; i++) {
				if (date.getTime() === data[i].dateTime.getTime()) {
					dates.push(date);
					flag = false;
				}
			}
			if (flag) dates.push(null);
		});
		return dates;
	};

	let chart: null | HTMLCanvasElement = null;

	const createChart = (ref: null | HTMLCanvasElement) => {
		if (chart === null) return;
		new Chart(chart, {
			type: 'line',
			data: {
				labels: weightData.map((data) => format(data.dateTime, 'MM/dd')),
				datasets: [
					{
						label: '2025',
						data: weightData.map((data) => data.weight)
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
		console.log('sdf');
		createChart(chart);
	});
</script>

<div class="jusitfy-center bg-base-300 content flex h-90 w-180 items-center rounded-md text-base">
	<canvas bind:this={chart} id="body-weight"></canvas>
</div>
