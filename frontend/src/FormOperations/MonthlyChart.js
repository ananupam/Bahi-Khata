import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { connect } from 'react-redux';
import moment from 'moment';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);

const MonthlyChart = React.memo((props) => {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		const temp = [];
		props.records.map((record) =>
			temp.push({
				x: new Date(record.date),
				y: record.amount,
				desc: record.description,
			})
		);

		temp.sort((a, b) => {
			return a.x - b.x;
		});

		setData(temp);
	}, [props.records]);

	return (
		<div style={{ width: '80%', height: 400, padding:130 , ...props.style }}>
			<Scatter
				data={{
					datasets: [
						{
							label: 'Records',
							data: data,
							showLine: true,
							fill: false,
							pointBorderWidth: 0,
							pointBackgroundColor: '#7986cb',
							pointBorderColor: '#7986cb',
							borderColor: '#7986cb',
							borderWidth: 2,
						},
					],
				}}
				options={{
					maintainAspectRatio: false,
					legend: {
						display: false,
					},
					scales: {
						xAxes: [
							{
								ticks: {
									callback: function (value, index, values) {
										return moment(new Date(value)).format(
											'MM DD yyyy'
										);
									},
								},
							},
						],
					},
					tooltips: {
						callbacks: {
							label: function (tooltipItem, data) {
								return 'Amount: ' + tooltipItem.yLabel;
							},
						},
					},
				}}
			/>
		</div>
	);
});

const mapStateToProps = (state) => ({
	records: state.records,
});

export default connect(mapStateToProps)(MonthlyChart);
