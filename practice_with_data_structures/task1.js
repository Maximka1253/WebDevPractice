"use strict";

function kebabToCamel(str) {
    let parts = str.split('-');
    let result = '';

    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];

        if (!part) continue;

        if (i === 0) {
            result += part;
        } else {
            result += part.at(0).toUpperCase() + part.slice(1);
        }
    }
    return result;
}

console.log(kebabToCamel("background-color"));
console.log(kebabToCamel("list-style-type"));
console.log(kebabToCamel("border-top-left-radius"));