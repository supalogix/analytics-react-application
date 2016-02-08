import React from "react";
import ReactDOM from "react-dom";
import {Styles} from "../style/Styles";

export default class ChartTitle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: "Loading Data ..."
		};

		props.onChartChanged(
			this.onChartChanged.bind(this));
	}

	onChartChanged(data) {
		this.setState({
			date: data["date"]
		});
	}

	componentDidMount() {
		let el = ReactDOM.findDOMNode(this);
		el.setAttribute("qa-chart-title", "")
	}

	render() {
		return (
			<div id="chart_title"
				style={Styles.chart_title}>
				
				{this.state.date}

			</div>
		);
	}
}
