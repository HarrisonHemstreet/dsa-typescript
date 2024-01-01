import { isValid } from './validParentheses'

test("check for valid parens", () => {
  expect(isValid("()")).toStrictEqual(true)
  expect(isValid("()[]{}")).toStrictEqual(true)
  expect(isValid("(]")).toStrictEqual(false)
})
