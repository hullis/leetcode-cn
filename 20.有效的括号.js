/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 === 1) {
        return false;
    }

    var parenStack = [];

    for (var i = 0; i < s.length; i++) {
        var currentChar = s[i];
        if (isLeft(currentChar)) {
            parenStack.push(currentChar);
        } else if (parenStack.length) {
            var left = parenStack[parenStack.length - 1];
            if (match(left, currentChar)) {
                parenStack.pop();
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    if (parenStack.length) {
        return false;
    }

    return true;
};

function match(left, right) {
    if (
        (left === "(" && right === ")") ||
        (left === "[" && right === "]") ||
        (left === "{" && right === "}")
    ) {
        return true;
    }

    return false;
}

function isLeft(char) {
    return char === "(" || char === "[" || char === "{";
}
// @lc code=end
