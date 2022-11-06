// 876. 链表的中间结点
// https://leetcode.cn/problems/middle-of-the-linked-list/

import ListNode from "../list";

function middleNode(head: ListNode | null): ListNode | null {
  if (!head || head.next === null) return head;
  let p1 = head;
  let p2: ListNode | null = head;
  while (p2 && p2.next) {
    p1 = p1.next as ListNode;
    p2 = p2.next ? p2.next.next : null;
    console.log(p1, p2);
  }
  return p1;
}
