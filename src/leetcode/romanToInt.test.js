"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const romanToInt_1 = require("./romanToInt");
test("convert roman numerals to an integer", () => {
    expect((0, romanToInt_1.romanToInt)("III")).toStrictEqual(3);
    expect((0, romanToInt_1.romanToInt)("LVIII")).toStrictEqual(58);
    expect((0, romanToInt_1.romanToInt)("MCMXCIV")).toStrictEqual(1994);
});
