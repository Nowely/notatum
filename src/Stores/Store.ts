import {makeAutoObservable} from "mobx";
import {Page} from "../Models/Page";

class Store {
    pages = [
        new Page('Home'),
        new Page('Board'),
        new Page('Tasks'),
    ]

    constructor() {
        makeAutoObservable(this)
    }
}

export const store = new Store()