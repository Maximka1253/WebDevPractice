"use strict";

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

let copy1 = [...arr]
let copy2 = arr.slice()

copy1.reverse()
copy2 = copy2.toReversed()

console.log(arr)
console.log(copy1)
console.log(copy2)