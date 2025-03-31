// 修正1：使用正确的导入语法
import readline from 'readline-sync';

const items: string[] = [];

let input: string;
do {
  // 修正2：使用类型断言或检查prompt方法是否存在
  input = String(readline.question('enter command: ')).trim(); // 注意：实际方法名是question不是prompt

  if (input.indexOf('add ') === 0) {
    const space = input.indexOf(' ');
    const item = input.substring(space + 1).trim(); // 修正3：+1跳过空格
    if (items.indexOf(item) === -1) {
      items.unshift(item);
      console.log(`adding "${item}"`);
    } else {
      console.log(`"${item}" already exists!`);
    }
  } else if (input === 'list') {
    items.forEach((item, index) => {
      console.log(`${index}. ${item}`);
    });
  }
} while (input !== 'exit');