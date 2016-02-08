import React from 'react';
import ChartTitle from "./ChartTitle";
import Chart from "./Chart";
import AggregationList from "./AggregationList";
import DateSelectionList from "./DateSelectionList";
import {COMMAND, EVENT} from "analytics-facade";
import {EVENT as WINDOW_EVENT} from "window-dom-facade";
import {Styles} from "../style/Styles";

export default class Main extends React.Component {
	constructor(props) {
		super(props);

		var analyticsFacade = props.analyticsFacade;
		var windowFacade = props.windowFacade;

		//
		// Delegates
		//
		this.onChartChanged = analyticsFacade.getDelegate(
			EVENT.CHART_CHANGED);
		this.onAggregationTypeChanged = analyticsFacade.getDelegate(
			EVENT.AGGREGATION_TYPE_CHANGED);
		this.onDatesUpdated = analyticsFacade.getDelegate(
			EVENT.DATES_UPDATED);
		this.onSelectedDateChanged = analyticsFacade.getDelegate(
			EVENT.SELECTED_DATE_CHANGED);
		this.onWindowResized = windowFacade.getDelegate(
			WINDOW_EVENT.WINDOW_RESIZED);

		//
		// Commands
		//
		this.changeSelectedDate = analyticsFacade.getCommand(
			COMMAND.CHANGE_SELECTED_DATE);
		this.aggregateByDay = analyticsFacade.getCommand(
			COMMAND.AGGREGATE_BY_DAY);
		this.aggregateByMonth = analyticsFacade.getCommand(
			COMMAND.AGGREGATE_BY_MONTH);
		this.aggregateByYear = analyticsFacade.getCommand(
			COMMAND.AGGREGATE_BY_YEAR);

	}

	render() {
		return (
			<div id="main" style={Styles.main}>
				<ChartTitle
					onChartChanged={this.onChartChanged} />

				<Chart 
					onChartChanged={this.onChartChanged} 
					onWindowResized={this.onWindowResized} />

				<AggregationList 
					onAggregationTypeChanged={this.onAggregationTypeChanged}
					aggregateByDay={this.aggregateByDay}
					aggregateByMonth={this.aggregateByMonth}
					aggregateByYear={this.aggregateByYear} />

				<DateSelectionList 
					onDatesUpdated={this.onDatesUpdated}
					onSelectedDateChanged={this.onSelectedDateChanged}
					changeSelectedDate={this.changeSelectedDate} />
			</div>
		);
	}
}
