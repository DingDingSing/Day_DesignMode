// 23. 合并K个升序链表
// https://leetcode.cn/problems/merge-k-sorted-lists/description/
// 输入：lists = [[1,4,5],[1,3,4],[2,6],[2,6],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

import ListNode from "../list";
// import mergeTwoLists_2022 from "./21";

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];
  let count = lists.length;
  let finishedList = null;
  while (count > 1) {
    const [l1, l2, ...others] = lists;
    finishedList = mergeTwoLists_2022(l1, l2);
    lists = [finishedList, ...others];
    count--;
  }
  return finishedList;
}