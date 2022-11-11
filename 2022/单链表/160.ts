// 160. 相交链表

// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

// 图示两个链表在节点 c1 开始相交：

import ListNode from "../list";

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  // 相交链表需要解决的问题是如何使链表遍历长度一致
  // 将两个链表进行连接后进行链表遍历
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    if (p1 === null) {
      p1 = headB;
    } else {
      p1 = p1.next;
    }

    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }

  return p1;
}
