import React from "react";
import ReactDOM from "react-dom";
import {Styles} from "../style/Styles";
import {DateFormatter} from "qa-locator-utility";

export default class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.command = props.command;

		this.date = props.date;
		this.key = props.key;
		this.selected = props.selected;
		
		if( props.selected ) {
			this.style = Styles.selected_list_item;
			this.id = "selected_list_item"
		}
		else {
			this.style = Styles.list_item;
		}

		this.className = "list_item";
	}

	componentDidMount() {
		let id = DateFormatter
			.encodeUSDate(this.date);

		ReactDOM
			.findDOMNode(this)
			.setAttribute("qa-list-item-id", id);

		if( this.selected )
			ReactDOM
				.findDOMNode(this)
				.setAttribute("qa-emphasized-date", true);
	}

	onClick(date, event) {
		this.command.execute(date);
	}

	render() {
		return (
			<div
				id={this.id}
				className={this.className}
				style={this.style}
				onClick={this.onClick.bind(this, this.date)}
				key={this.key}>
				
				{this.date}

			</div>
		);
	}
}
