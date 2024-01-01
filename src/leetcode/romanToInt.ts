export function romanToInt(s: string): number {
  const roms: {[key: string]: number} = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let total = 0

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && roms[s[i]] < roms[s[i + 1]]) {
      total -= roms[s[i]]
    } else {
      total += roms[s[i]]
    }
  }

  return total
};
