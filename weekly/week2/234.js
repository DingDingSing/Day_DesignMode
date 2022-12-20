// 请判断一个链表是否为回文链表。
// https://leetcode-cn.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 通过栈
var isPalindrome = function (head) {
  const stack = [];
  while (head) {
    stack.push(head.val);
  }

  return stack.join("") === stack.reverse().join("");
};

// var isPalindrome = function (head) {
//     let reverse = reverseList(head);
//     while (head && reverse) {
//         if (head.val !== reverse.val) return false;
//         head = head.next;
//         reverse = reverse.next;
//     }
//     return true;
// };

// var reverseList = function (head) {
//   if (head === null || head.next === null) return head;
//   const last = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return last;
// };

var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverseList(slow.next);

  while (slow) {
    if (head.val !== slow.val) return false;
    head = head.next;
    slow = slow.next;
  }
  return true;
};

var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
