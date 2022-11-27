import {makeAutoObservable, observable} from "mobx";
import {Page} from "../Models/Page";
import {faker} from "@faker-js/faker";

class Store {
    pages = [
        new Page('Home', Array.from({ length: 10 }).map(_ => new Page(faker.git.commitMessage()))),
        new Page('Board'),
        new Page('Tasks'),
    ]
    selectedPage?: Page

    constructor() {
        makeAutoObservable(this, {
            selectedPage: observable.ref
        })
    }
}

export const store = new Store()