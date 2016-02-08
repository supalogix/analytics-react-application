import React from "react";
import ReactDOM from "react-dom";
import d3Chart from "d3Chart";
import {Styles} from "../style/Styles";
import {DateFormatter} from "qa-locator-utility";

export default class Chart extends React.Component {
	constructor(props) {
		super(props);

		props.onChartChanged(
			this.onChartChanged.bind(this));
		props.onWindowResized(
			this.onWindowResize.bind(this));

//		window.addEventListener(
//			"resize", 
//			this.onResize.bind(this));

		this.state = {
			props: {},
			data: []
		};
	}

	componentDidMount() {
		let el = ReactDOM.findDOMNode(this);
		el.setAttribute("qa-chart-type", "");

		var chart = new d3Chart();

		let props = { 
			width: el.clientWidth, 
			height:300 
		}; 

		chart.create(
			el, 
			props,
			this.state.data );
	}

	componentDidUpdate() {
		let props = this.state.props;
		let data = this.state.data;
		let date = this.state.date;

		let el = ReactDOM.findDOMNode(this);
		let chartType = DateFormatter
			.encodeUSDate(date);

		el.setAttribute("qa-chart-type", chartType);

		var chart = new d3Chart();
		chart.update(el, props, data );
	}

	onWindowResize() {
		let el = ReactDOM.findDOMNode(this);
		let clientWidth = el.clientWidth;

		this.setState({
			props: {
				width: clientWidth,
				height: 300
			}
		});
	}

//	onResize() {
//		let el = ReactDOM.findDOMNode(this);
//		let clientWidth = el.clientWidth;
//
//		this.setState({
//			props: {
//				width: clientWidth,
//				height: 300
//			}
//		});
//	}

	onChartChanged(data) {
		let el = ReactDOM.findDOMNode(this);
		let clientWidth = el.clientWidth;

		let date = data.date;

		let items = data.items.map((item) => {
			return {
				label: item.name,
				value: item.value
			};
		});

		this.setState({
			props: {
				width: clientWidth,
				height: 300,
				enableTransition: true,
				duration: 1000
			},
			data: items,
			date: date
		});
	}

	render() {
		return (
			<div 
				style={Styles.chart}
				id="chart"></div>
		);
	}
}
