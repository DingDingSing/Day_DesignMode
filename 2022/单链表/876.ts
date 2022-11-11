// 876. 链表的中间结点
// https://leetcode.cn/problems/middle-of-the-linked-list/

import ListNode from "../list";

function middleNode(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) return head;
  let slow = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }
  return slow;
}
