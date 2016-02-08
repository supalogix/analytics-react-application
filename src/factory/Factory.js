import Service from "service";
import AnalyticsFacade from "analytics-facade";
import WindowDomFacade from "window-dom-facade";

export default class Factory {
	static analyticsFacade() {
		let service = new Service();
		let facade = new AnalyticsFacade(service);

		return facade;
	}

	static windowDomFacade() {
		return new WindowDomFacade();
	}
}
