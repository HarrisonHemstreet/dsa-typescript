"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(x) {
    let str_x = x.toString();
    let rev_x = x.toString().split("").reverse().join("");
    return str_x === rev_x;
}
exports.isPalindrome = isPalindrome;
;
