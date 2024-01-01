import { romanToInt } from './romanToInt'

test("convert roman numerals to an integer", () => {
  expect(romanToInt("III")).toStrictEqual(3)
  expect(romanToInt("LVIII")).toStrictEqual(58)
  expect(romanToInt("MCMXCIV")).toStrictEqual(1994)
})
