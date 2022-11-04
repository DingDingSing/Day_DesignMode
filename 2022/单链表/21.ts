// 21. 合并两个有序链表
// https://leetcode.cn/problems/merge-two-sorted-lists/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists_2022(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // 双指针移动
  // 定义一个虚拟节点用来避免节点处理逻辑

  const dummy = new ListNode();
  let p = dummy;
  let p1 = list1;
  let p2 = list2;

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    p = p.next;
  }

  // 处理剩余节点
  if (p1 !== null) {
    p.next = p1;
  }

  if (p2 !== null) {
    p.next = p2;
  }

  return dummy.next;
}
