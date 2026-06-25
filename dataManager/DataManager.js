import { createConnection } from "mysql";

/**
 * @typedef {Object} Action
 * @property {}
 */

class DataManager {
    // FIFO

    /** @type {Array<Action>} */
    actions

    connector

    constructor() {
        this.actions = [];
    }

    async connect() {

    }

    async #addWait(fnc) {
        let id = Date.now() + Math.random();
        
        this.actions.push({
            name: fnc.name,
            id: Date.now() + Math.random()
        });
    }

    #removeWait() {
        this.actions.shift();
    }

    async createUser() {
        await this.#addWait(this.createUser);
        

        
        this.#removeWait();
    }

    addAction
}

let a = new DataManager();

a.createUser();