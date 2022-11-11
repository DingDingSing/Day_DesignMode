// 142. 环形链表 II

// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 不允许修改 链表。

import ListNode from "../list";

function detectCycle(head: ListNode | null): ListNode | null {
  let position = hasCycle(head);
  let slow = head;
  if (position) {
    // 相遇位置
    // slow 从头开始走 fast 从当前西节点继续走 直到再次相遇
    while (true) {
      // 需要先进行判断是否先等、因为会出现head就是环开始的情况
      if (slow === position) {
        return position;
      }
      slow = slow!.next;
      position = position!.next;
    }
  }

  return null;
}

function hasCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    // slow === fast
    slow = slow!.next as ListNode;
    fast = fast.next.next;

    if (slow === fast) {
      return fast;
    }
  }
  return null;
}
