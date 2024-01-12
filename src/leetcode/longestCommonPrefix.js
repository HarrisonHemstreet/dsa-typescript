"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestCommonPrefix = void 0;
function longestCommonPrefix(strs) {
    strs.sort();
    let res = "";
    for (let i = 0; i < strs.length; i++) {
        if (strs[0][i] === strs[strs.length - 1][i]) {
            res += strs[0][i];
        }
        else {
            return res;
        }
    }
    return res;
}
exports.longestCommonPrefix = longestCommonPrefix;
