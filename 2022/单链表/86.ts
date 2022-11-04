// 86. 分隔链表
// https://leetcode.cn/problems/partition-list/

import ListNode from "../list";

function partition(head: ListNode | null, x: number): ListNode | null {
  let dummy1 = new ListNode();
  let dummy2 = new ListNode();
  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;

  while (p !== null) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    const snap = p.next;
    // 断开 p1 p2 中 P的 next节点
    p.next = null;
    p = snap;
  }
  p1.next = dummy2.next;
  return dummy1.next;
}
