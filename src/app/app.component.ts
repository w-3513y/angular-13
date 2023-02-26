import { Component } from "@angular/core";
import Handsontable from "handsontable";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	hotSettings: Handsontable.GridSettings = {
		data: [
			["Wrong Quote Length Number", "1558808", 11.44],
			["USP Quote", "1550548798841", 11.88],
			["DOMS Quote", "15478966", 15.9],
		],
		colHeaders: ["Messages", "Quote Number", "Target Price"],
		rowHeaders: false,
		width: "100%",
		height: "100%",
	};
}
