// employee.ts
import { Person } from './person.js';  // 注意添加 .js 后缀

class Employee extends Person {
  private joinedDate: Date;
  private grade: number;

  constructor(firstname: string, lastname: string, grade: number = 1) {
    super(firstname, lastname);
    this.joinedDate = new Date();
    this.grade = grade;
  }

  calculateSalary = (months: number = 1): number => {
    return this.grade * 1000 * months;
  };
}

// 测试代码
const emp = new Employee("Luke", "Skywalker", 20);
console.log(`Employee ${emp.name}'s 10 months salary is ${emp.calculateSalary(10)}`);