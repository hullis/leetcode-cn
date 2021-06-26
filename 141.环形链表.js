/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) {
        return false;
    }

    var slow = head;
    var fast = head.next;

    while (slow && fast) {
        if (slow === fast) {
            return true;
        }

        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
    }

    return false;
};
// @lc code=end

/**
 * solution I
 *
 * 统计每个节点的入度，第一个入度为 2 的节点即为环的起始位置，时间和空间复杂度均为 O(n)
 * 这种解法太简单就不写实现了
 *
 * solution II
 *
 * 快慢指针
 */