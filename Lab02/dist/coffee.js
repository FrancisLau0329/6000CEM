"use strict";
// coffee.ts
class Coffee {
    #type;
    #size;
    #shots;
    constructor(type, size = 8, shots = 0) {
        this.#type = type;
        this.#size = size;
        this.#shots = shots;
    }
    getSize() {
        if (this.#size <= 8)
            return 'small';
        else if (this.#size <= 12)
            return 'medium';
        else
            return 'large';
    }
    get order() {
        const strength = this.#shots >= 2 ? 'strong' : 'normal';
        return `${this.#type} (${this.getSize()}) with ${this.#shots} shots (${strength})`;
    }
}
// 测试用例
const coffee1 = new Coffee('Latte', 10, 1);
const coffee2 = new Coffee('Espresso', 16, 3);
console.log(coffee1.order); // "Latte (medium) with 1 shots (normal)"
console.log(coffee2.order); // "Espresso (large) with 3 shots (strong)"
