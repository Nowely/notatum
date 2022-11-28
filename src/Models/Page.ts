import {Base} from "./Base";
import {makeObservable} from "mobx";

export class Page extends Base {
    title? = ""

    properties?: Record<string, any>
    view: any

    constructor(title?: string, public children?: Page[]) {
        super();
        this.title = title;
        makeObservable(this, {
			title: true,
			properties: true,
			children: true
		})
    }
}