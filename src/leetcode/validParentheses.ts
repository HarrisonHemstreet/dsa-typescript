export function isValid(s: string): boolean {
  if (s.length <= 1) {
      return false
  }

  let stack: string[] = []
  const parens: {[key: string]: string} = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] in parens) {
      stack.push(parens[s[i]])
    }
    else if (s[i] !== stack.pop()) {
      return false
    }
  }
  if (stack.length !== 0) {
      return false
  }
  return true
}
