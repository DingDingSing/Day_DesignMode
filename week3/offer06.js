// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const stack = [];
  while (head) {
    stack.unshift(head.val);
    head = head.next;
  }
  return stack;
};

console.log("stack", reversePrint([1, 2, 3]));
