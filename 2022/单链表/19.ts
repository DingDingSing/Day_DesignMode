// 19. 删除链表的倒数第 N 个结点
// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

import ListNode from "../list";

// 12345
// 3
// 4

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;
  const dummy = new ListNode();
  dummy.next = head;
  const node = findBackWards(dummy, n + 1) as ListNode;
  node.next = node.next!.next;
  return dummy.next;
}

// 查找倒数第N个节点
function findBackWards(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;

  // 先行节点
  let p1: ListNode = head;
  // 后行节点
  let p2: ListNode = head;

  for (let i = 0; i < n; i++) {
    p1 = p1.next as ListNode;
  }

  while (p1 !== null) {
    p1 = p1.next as ListNode;
    p2 = p2.next as ListNode;
  }
  return p2;
}
