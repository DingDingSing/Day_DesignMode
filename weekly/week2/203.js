// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
// https://leetcode-cn.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

var removeElements = function (head, val) {
  if (head === null || val === null) return null;
  const node = new ListNode(0);
  node.next = head;
  let pre = node;

  while (head !== null) {
    if (head.val === val) {
      pre.next = head.next;
    } else {
      pre = head;
    }
    head = head.next;
  }
  return node.next;
};
