// promises.ts
import axios from 'axios';
import * as readline from 'readline-sync';

const FIXER_KEY = 'YOUR_FIXER_API_KEY';
const OPENEXCHANGE_KEY = 'YOUR_OPENEXCHANGE_KEY';

// 1. 获取汇率
function getExchangeRate(base: string, target: string): Promise<number> {
  return new Promise((resolve, reject) => {
    axios.get(`https://openexchangerates.org/api/latest.json?app_id=${OPENEXCHANGE_KEY}&base=${base}`)
      .then(response => {
        const rate = response.data.rates[target];
        rate ? resolve(rate) : reject(`Currency ${target} not supported`);
      })
      .catch(err => reject(err));
  });
}

// 2. 获取货币全名
function getCurrencyName(code: string): Promise<string> {
  return axios.get(`https://openexchangerates.org/api/currencies.json`)
    .then(response => response.data[code] || 'Unknown Currency');
}

// 3. 主流程
function main() {
  const base = readline.question('Base currency (e.g. HKD): ').toUpperCase();
  const target = readline.question('Target currency (e.g. USD): ').toUpperCase();

  getCurrencyName(base)
    .then(baseName => {
      console.log(`\nConverting from ${baseName} (${base})`);
      return getExchangeRate(base, target);
    })
    .then(rate => {
      const amount = parseFloat(readline.question('Amount to convert: '));
      return getCurrencyName(target)
        .then(targetName => {
          console.log(`\n${amount} ${base} = ${(amount * rate).toFixed(2)} ${target} (${targetName})`);
        });
    })
    .catch(err => console.error('Error:', err));
}

main();