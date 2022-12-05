// 92. 反转链表 II
// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
// https://leetcode.cn/problems/reverse-linked-list-ii/

import ListNode from "../list";

// 递归反转整个链表
function reverseList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;
  const next = reverseList(head!.next);
  head!.next!.next = head;
  head!.next = null;
  return next;
}

// 迭代反转整个链表
function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  while (cur !== null) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

function reverseList(head: ListNode | null): ListNode | null {
  // 定义退出条件
  if (head == null || head.next == null) return head;
  // last 最后是链表的最后一个节点、也是新链表的头节点
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}

function reverseList(head: ListNode | null): ListNode | null {
  // 定义 pre 节点
  let pre = null;
  // 定义 cur 节点
  let cur = head;
  // 循环
  while (cur !== null) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

// ListNode reverseN(ListNode head, int n)
// 反转前N个节点

let pre: null | ListNode = null;

function reverseN(head: ListNode | null, num: number): ListNode | null {
  // 定义退出条件
  if (num === 1) {
    pre = head!.next;
    return head;
  }

  const last = reverseN(head!.next, num--);
  head!.next!.next = head;
  //没到最终之前都是 null 和反转链表一致
  //到N后将后继节点变为 N.next
  head!.next = pre;
  return last;
}

// 反转 [M,N]  区间的链表

function reverseBetween(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  if (m == 1) {
    return reverseN(head, n);
  }

  head!.next = reverseBetween(head!.next, m - 1, n - 1);

  return head;
}

// k个一组反转链表

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head == null || head.next == null) return head;

  let p: ListNode | null = head;

  for (let i = 0; i < k; i++) {
    if (p == null) return head;
    p = p.next;
  }

  let _head = reverseN(p, k);
  
}
