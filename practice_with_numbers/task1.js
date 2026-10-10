'use strict';

function isBothSimple(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a) === 1;
}

console.log(isBothSimple(15, 28));
console.log(isBothSimple(14, 21));
