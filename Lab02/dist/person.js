"use strict";
// person.ts
class Person {
    #first; // 私有属性
    #last;
    constructor(firstname, lastname) {
        if (!firstname || !lastname)
            throw new Error('Missing parameters');
        this.#first = firstname;
        this.#last = lastname;
    }
    get name() {
        return `${this.#first} ${this.#last}`;
    }
}
// employee.ts
class Employee extends Person {
    #joinedDate;
    #grade;
    constructor(firstname, lastname, grade = 1) {
        super(firstname, lastname);
        this.#joinedDate = new Date();
        this.#grade = grade;
    }
    calculateSalary = (months = 1) => {
        return this.#grade * 1000 * months;
    };
}
// 测试用例
const e1 = new Employee('Luke', 'Skywalker', 20);
console.log(`Employee ${e1.name}'s 10 months salary is ${e1.calculateSalary(10)}`);
