export const Styles = {
	main: {
		display: "flex",
		flexDirection: "column"
	},
	chart: {
		flex: "1 1 auto",
		order: 1,
		height: "300px",
		width: "100%",
		border: "1px solid black",
		margin: "5px 0"
	},
	filter_type: {
		flex: "1 1 auto",
		order: 2,
		display: "flex",
		flexDirection: "row"
	},
	date_selection_list: {
		flex: "1 1 auto",
		order: 3,
		overflowY: "scroll",
		height: "200px",
		border: "1px solid black",
		margin: "5px 0px"
	},
	list_item: {
		borderBottom: "1px solid black",
		cursor: "pointer"
	},
	selected_list_item: {
		borderBottom: "1px solid black",
		backgroundColor: "red",
		cursor: "pointer"
	},
	button: {
		flex: "1 1 33%",
		textAlign: "center",
		border: "1px solid black",
		cursor: "pointer"
	},
	chart_title: {
		border: "1px solid black",
		textAlign: "center",
		padding: "5px 0",
	},
};
