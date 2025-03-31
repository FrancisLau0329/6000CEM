// person.ts
export class Person {  // 必须添加 export
    private first: string;  // 改用 private 替代 #
    private last: string;
  
    constructor(firstname: string, lastname: string) {
      this.first = firstname;
      this.last = lastname;
    }
  
    get name(): string {
      return `${this.first} ${this.last}`;
    }
  }