import { isPalindrome } from './isPalindrome'

test("take a number and see if it reads the same forwards and backwards", () => {
  expect(isPalindrome(121)).toStrictEqual(true)
  expect(isPalindrome(-121)).toStrictEqual(false)
  expect(isPalindrome(10)).toStrictEqual(false)
})
