// 21. 合并两个有序链表

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

function mergeTwoLists(l1, l2) {
  // 新链表头节点
  const head = new ListNode(-1);
  let tail = head;
  if (!l1 && !l2) return head.next;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1 !== null) {
    tail.next = l1;
  } else {
    tail.next = l2;
  }
  return head.next;
}
