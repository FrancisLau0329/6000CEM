// currency.ts
import axios from 'axios';
import * as readline from 'readline-sync';

const API_KEY = 'YOUR_FIXER_API_KEY'; // 替换为你的API密钥

async function convertCurrency(base: string, target: string) {
  try {
    const url = `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=${base}`;
    const response = await axios.get(url);

    if (!response.data.success) {
      throw new Error(`API Error: ${response.data.error.type}`);
    }

    const rate = response.data.rates[target];
    if (!rate) throw new Error(`Invalid target currency: ${target}`);

    const amount = parseFloat(readline.question('Enter amount to convert: '));
    const converted = (amount * rate).toFixed(2);

    console.log(`${amount} ${base} = ${converted} ${target}`);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// 命令行参数处理
if (process.argv.length < 4) {
  console.log('Usage: node currency.ts <baseCurrency> <targetCurrency>');
  process.exit(1);
}

const baseCurrency = process.argv[2].toUpperCase();
const targetCurrency = process.argv[3].toUpperCase();

convertCurrency(baseCurrency, targetCurrency);