import { action, computed, makeObservable, observable } from 'mobx';

export class Store {

    constructor() {
        makeObservable(this);
    }
}
