/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    var previous = null;
    var pivot = head;
    var nextPivot = null;

    while (pivot) {
        nextPivot = pivot.next;
        pivot.next = previous;
        previous = pivot;
        pivot = nextPivot;
    }

    return previous;
};
// @lc code=end

