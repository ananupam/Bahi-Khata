import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Scatter } from 'react-chartjs-2';
import { connect } from 'react-redux';
import moment from 'moment';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const TimeSeriesPlot = React.memo((props) => {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		const temp = [];
		props.records.map((record) =>
			temp.push({
				name: record.date,
				uv: record.amount,
				pv: 2400,
				amt: 2400
				// desc: record.description,
			})
		);

		temp.sort((a, b) => {
			return a.x - b.x;
		});

		setData(temp);
	}, [props.records]);

	return (
		<div style={{ marginX:'10%', width: '100%', height: '50%',paddingLeft: '12%',  ...props.style }}>
			
			<LineChart width={800} height={400} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
		</div>
	);
});

const mapStateToProps = (state) => ({
	records: state.records,
});

export default connect(mapStateToProps)(TimeSeriesPlot);
