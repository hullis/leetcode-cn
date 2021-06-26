/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function (l1, l2) {
    var head = { next: null };
    var pivot = head;

    while (l1 && l2) {
        var consumeL1 = l1.val <= l2.val;

        pivot.next = consumeL1 ? l1 : l2;

        if (consumeL1) {
            l1 = l1.next;
        } else {
            l2 = l2.next;
        }

        pivot = pivot.next;
    }

    pivot.next = l1 || l2;

    return head.next;
};
// @lc code=end

