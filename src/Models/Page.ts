import {Base} from "./Base";

export class Page extends Base {
    title? = ""

	constructor(title?: string) {
		super();
		this.title = title;
	}
}