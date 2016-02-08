import React from 'react';
import AggregationButton from './AggregationButton.jsx';
import {Styles} from "../style/Styles";

export default class AggregationList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedAggregationType: "Day"
		};

		props.onAggregationTypeChanged(
			this.onAggregationTypeChanged.bind(this));

		this.commands = {
			"Day": props.aggregateByDay,
			"Month": props.aggregateByMonth,
			"Year": props.aggregateByYear
		};
	}

	onAggregationTypeChanged(type) {
		this.setState({
			selectedAggregationType: type
		});
	}

	getButtons(selectedType) {
		let self = this;

		return ["Day", "Month", "Year"].map((type) => {
			let selected = (type === selectedType);
			let command = getCommand(type);

			return ( 
				<AggregationButton 
					key={Math.random()}
					selected={selected} 
					title={type} 
					command={command} />
			);
		});

		function getCommand(type) {
			return self.commands[type];
		}
	}

	render() {
		let selectedButton = this
			.state
			.selectedAggregationType;

		let buttons = this
			.getButtons(selectedButton);

		return (
			<div 
				id="aggregate"
				style={Styles.filter_type}>
				{buttons}
			</div>
		);
	}
}
