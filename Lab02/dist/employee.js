"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person"); // 关键：显式导入
class Employee extends person_1.Person {
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
// 测试代码
const emp = new Employee("John", "Doe", 3);
console.log(emp.calculateSalary(12)); // 输出 36000
