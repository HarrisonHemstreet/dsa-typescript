"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPalindrome_1 = require("./isPalindrome");
test("take a number and see if it reads the same forwards and backwards", () => {
    expect((0, isPalindrome_1.isPalindrome)(121)).toStrictEqual(true);
    expect((0, isPalindrome_1.isPalindrome)(-121)).toStrictEqual(false);
    expect((0, isPalindrome_1.isPalindrome)(10)).toStrictEqual(false);
});
