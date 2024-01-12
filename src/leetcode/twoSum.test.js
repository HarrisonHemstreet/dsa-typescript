"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twoSum_1 = require("./twoSum");
test(`find what adds up to target`, () => {
    expect((0, twoSum_1.twoSum)([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
    expect((0, twoSum_1.twoSum)([3, 2, 4], 6)).toStrictEqual([1, 2]);
    expect((0, twoSum_1.twoSum)([3, 3], 6)).toStrictEqual([0, 1]);
});
