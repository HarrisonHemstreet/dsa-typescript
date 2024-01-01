export function longestCommonPrefix(strs: string[]): string {
  strs.sort()
  let res: string = ""
  for (let i = 0; i < strs.length; i++) {
    if (strs[0][i] === strs[strs.length - 1][i]) {
      res += strs[0][i]
    } else {
      return res
    }
  }
  return res
}

