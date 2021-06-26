/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var max = Math.max(l1.length, l2.length);
    var ret = new Array(max);
    var i = 0;
    var upp = 0;

    while (i < max) {
        var a1 = l1[i] || 0;
        var a2 = l2[i] || 0;
        var sum = upp + a1 + a2;
        var remain = sum >= 10 ? sum - 10 : sum;

        upp = sum >= 10 ? 1 : 0;
        ret[i] = remain;

        i++;
    }

    return ret;
};
// @lc code=end

