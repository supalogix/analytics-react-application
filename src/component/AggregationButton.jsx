import React from 'react';
import ReactDOM from "react-dom";
import {Styles} from "../style/Styles";
import {DateFormatter} from 'qa-locator-utility';

let _ = require("underscore");

export default class AggregationButton extends React.Component {
	constructor(props) {
		super(props);

		this.style = _(Styles.button).clone();

		if(props.selected === true) {
			this.style.backgroundColor = "red";
		}

		this.selected = props.selected;
		this.title = props.title;
		this.command = props.command;

		this.className = props.selected ? "selected_button" : "button";
	}

	componentDidMount() {
		ReactDOM
			.findDOMNode(this)
			.setAttribute("qa-button-id", this.title);

		if( this.selected )
			ReactDOM
				.findDOMNode(this)
				.setAttribute("qa-button-selected", this.selected);
	}

	componentDidUpdate() {
		if( this.selected )
			ReactDOM
				.findDOMNode(this)
				.setAttribute("qa-button-selected", this.selected);
	}

	onClick() {
		this.command.execute();
	}

	render() {
		return (
			<div 
				onClick={this.onClick.bind(this)}
				className={this.className}
				style={this.style}>
				
				{this.title}

			</div>
		);
	}
}
