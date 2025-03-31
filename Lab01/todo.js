"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var items = [];
var input;
do {
    input = String(readline.prompt('enter command: ')).trim();
    if (input.indexOf('add ') === 0) {
        var space = input.indexOf(' ');
        var item = input.substring(space).trim().toLowerCase(); // 转为小写
        if (items.indexOf(item) === -1) {
            items.unshift(item);
            console.log("adding \"".concat(item, "\""));
        }
        else {
            console.log("\"".concat(item, "\" already exists!"));
        }
    }
    else if (input === 'list') {
        for (var i = 0; i < items.length; i++) {
            console.log("".concat(i, ". ").concat(items[i]));
        }
    }
    else if (input.indexOf('remove ') === 0) {
        var space = input.indexOf(' ');
        var target = input.substring(space).trim().toLowerCase();
        var index = items.indexOf(target);
        if (index !== -1) {
            items.splice(index, 1);
            console.log("removed \"".concat(target, "\""));
        }
        else {
            console.log("\"".concat(target, "\" not found!"));
        }
    }
} while (input !== 'exit');
