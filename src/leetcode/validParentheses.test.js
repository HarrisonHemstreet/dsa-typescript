"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validParentheses_1 = require("./validParentheses");
test("check for valid parens", () => {
    expect((0, validParentheses_1.isValid)("()")).toStrictEqual(true);
    expect((0, validParentheses_1.isValid)("()[]{}")).toStrictEqual(true);
    expect((0, validParentheses_1.isValid)("(]")).toStrictEqual(false);
});
