"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
function twoSum(nums, target) {
    let accu = {};
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in accu) {
            return [accu[nums[i]], i];
        }
        else {
            accu[target - nums[i]] = i;
        }
    }
    return res;
}
exports.twoSum = twoSum;
;
