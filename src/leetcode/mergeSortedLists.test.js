"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSortedLists_1 = require("./mergeSortedLists");
test("merge two sorted singly linked lists", () => {
    expect((0, mergeSortedLists_1.mergeTwoLists)([1, 2, 4], [1, 3, 4])).toStrictEqual([1, 1, 2, 3, 4, 4]);
});
