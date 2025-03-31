"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// promises.ts
var axios_1 = require("axios");
var readline = require("readline-sync");
var FIXER_KEY = 'YOUR_FIXER_API_KEY';
var OPENEXCHANGE_KEY = 'YOUR_OPENEXCHANGE_KEY';
// 1. 获取汇率
function getExchangeRate(base, target) {
    return new Promise(function (resolve, reject) {
        axios_1.default.get("https://openexchangerates.org/api/latest.json?app_id=".concat(OPENEXCHANGE_KEY, "&base=").concat(base))
            .then(function (response) {
            var rate = response.data.rates[target];
            rate ? resolve(rate) : reject("Currency ".concat(target, " not supported"));
        })
            .catch(function (err) { return reject(err); });
    });
}
// 2. 获取货币全名
function getCurrencyName(code) {
    return axios_1.default.get("https://openexchangerates.org/api/currencies.json")
        .then(function (response) { return response.data[code] || 'Unknown Currency'; });
}
// 3. 主流程
function main() {
    var base = readline.question('Base currency (e.g. HKD): ').toUpperCase();
    var target = readline.question('Target currency (e.g. USD): ').toUpperCase();
    getCurrencyName(base)
        .then(function (baseName) {
        console.log("\nConverting from ".concat(baseName, " (").concat(base, ")"));
        return getExchangeRate(base, target);
    })
        .then(function (rate) {
        var amount = parseFloat(readline.question('Amount to convert: '));
        return getCurrencyName(target)
            .then(function (targetName) {
            console.log("\n".concat(amount, " ").concat(base, " = ").concat((amount * rate).toFixed(2), " ").concat(target, " (").concat(targetName, ")"));
        });
    })
        .catch(function (err) { return console.error('Error:', err); });
}
main();
