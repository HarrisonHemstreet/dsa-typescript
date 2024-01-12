import { mergeTwoLists } from './mergeSortedLists'

test("merge two sorted singly linked lists", () => {
  expect(mergeTwoLists([1,2,4], [1,3,4])).toStrictEqual([1,1,2,3,4,4])
})
