"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const sum = require('./sum')
const sum_1 = require("./sum");
test('adds 1 + 2 to equal 3', () => {
    expect((0, sum_1.sum)(1, 2)).toBe(3);
});
