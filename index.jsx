import React from 'react';
import ReactDOM from 'react-dom';

import Main from "./src/component/Main";
import Factory from "./src/factory/Factory";
import WindowDomFacade from "window-dom-facade";

let analyticsFacade = Factory.analyticsFacade();
let windowFacade = Factory.windowDomFacade();

ReactDOM.render(
	<Main 
		analyticsFacade={analyticsFacade} 
		windowFacade={windowFacade} />,
	document.getElementById("container")
);

analyticsFacade
	.getCommand("LOAD")
	.execute();

