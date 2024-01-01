export function twoSum(nums: number[], target: number): number[] {
  let accu: {[key: number]: number} = {}
  let res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in accu) {
      return [accu[nums[i]], i]
    } else {
      accu[target - nums[i]] = i
    }
  }
  return res
};
