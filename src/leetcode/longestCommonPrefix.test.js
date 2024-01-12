"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const longestCommonPrefix_1 = require("./longestCommonPrefix");
test("find the longest common prefix amongst an array of strings", () => {
    expect((0, longestCommonPrefix_1.longestCommonPrefix)(["flower", "flow", "flight"])).toBe("fl");
    expect((0, longestCommonPrefix_1.longestCommonPrefix)(["dog", "racecar", "car"])).toBe("");
});
