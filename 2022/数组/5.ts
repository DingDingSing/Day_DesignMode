// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
//leetcode.cn/problems/longest-palindromic-substring/

function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  // 问题分解
  let result = "";

  for (let i = 0; i < s.length - 1; i++) {
    const odd = palindrome(s, i, i + 1);
    const even = palindrome(s, i, i);
    result = compareMaxLen(compareMaxLen(odd, even), result);
  }
  return result;
}
function compareMaxLen(s1: string, s2: string) {
  return s1.length > s2.length ? s1 : s2;
}

function palindrome(s: string, i: number, j: number): string {
  while (i >= 0 && j < s.length) {
    if (s[i] == s[j]) {
      i--;
      j++;
    } else {
      break;
    }
  }
  return s.substring(i + 1, j);
}

const example = "bb";
const ac = longestPalindrome(example);

console.log("ac", ac);
