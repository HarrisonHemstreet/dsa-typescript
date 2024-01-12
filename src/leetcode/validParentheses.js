"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
function isValid(s) {
    if (s.length <= 1) {
        return false;
    }
    let stack = [];
    const parens = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] in parens) {
            stack.push(parens[s[i]]);
        }
        else if (s[i] !== stack.pop()) {
            return false;
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}
exports.isValid = isValid;
