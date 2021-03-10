/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
// 说明：不允许修改给定的链表。
// 进阶：
// 你是否可以使用 O(1) 空间解决此题？

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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let p = head;
  let q = head;
  let isLoop = false;
  while (!isLoop && q && q.next) {
    p = p.next;
    q = q.next.next;
    if (p === q) {
      isLoop = true;
    }
  }
  if (isLoop) {
    p = head;
    while (p !== q) {
      p = p.next;
      q = q.next;
    }
    return q;
  }
  return null;
};
// @lc code=end
