import {Base} from "./Base";

export class Page extends Base {
    title? = ""

	properties?: Record<string, any>
	view: any

	constructor(title?: string, public children?: Page[]) {
		super();
		this.title = title;
	}
}