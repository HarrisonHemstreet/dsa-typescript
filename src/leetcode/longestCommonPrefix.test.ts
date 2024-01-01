import { longestCommonPrefix } from './longestCommonPrefix'

test("find the longest common prefix amongst an array of strings", () => {
  expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
  expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
})
