export function isPalindrome(x: number): boolean {
  let str_x: string = x.toString()
  let rev_x: string = x.toString().split("").reverse().join("")
  return str_x === rev_x
};

