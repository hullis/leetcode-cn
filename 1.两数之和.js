/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var diffCache = {}
    var len = nums.length;

    for (var i = 0; i < len; i++) {
        var current_num = nums[i];
        var diff = target - current_num;

        if (typeof diffCache[diff] !== 'undefined') {
            return [diffCache[diff], i];
        } else {
            diffCache[current_num] = i;
        }
    }

    return null;
};
// @lc code=end

