"use strict";

import React, { PropTypes } from "react";
import ListItem from "./ListItem";
import {Styles} from "../style/Styles";

export default class DateSelectionList extends React.Component {
	constructor(props) {
		super(props);

//		this.command = props.facade.getCommand("CHANGE_SELECTED_DATE");
		this.command = props.changeSelectedDate;

		props.onDatesUpdated(
			this.onLoad.bind(this));

		props.onSelectedDateChanged(
			this.onSelectedDateChanged.bind(this));

		this.state = {
			items: [],
			selectedDate: ""
		};
	}

	onLoad(data) {
		this.setState({
			items: data
		});
	}

	onSelectedDateChanged(date) {
		this.setState({
			selectedDate: date
		});
	}

	getRows(items, command, selectedDate) {
		return items.map((date) => {
			let selected = false;

			if(selectedDate === date)
				selected = true;

			return <ListItem 
				selected={selected}
				key={Math.random()}
				command={command}
				date={date} />
		});
	}

	render() {
		let rows = this.getRows(
			this.state.items, 
			this.command, 
			this.state.selectedDate);

		return (
			<div 
				id="list"
				style={Styles.date_selection_list}>
				{rows}
			</div>
		);
	}
}

