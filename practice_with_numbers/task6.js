"use strict";

let N = 2032443;

function find_devisors(n) {
    let result = [];
    let del = 2;

    while (del * del <= n) {
        let count = 0;
        while (n % del === 0) {
            n /= del;
            count++;
        }
        if (count > 0) {
            result.push([del, count]);
        }
        del++;
    }
    if (n > 1) {
        result.push([n, 1]);
    }
    return result;
}

let devisors = find_devisors(N);

for (let [p, k] of devisors) {
    console.log(p, k);
}