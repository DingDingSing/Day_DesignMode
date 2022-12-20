// 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
// https://leetcode-cn.com/problems/one-away-lcci/

function oneEditAway(first: string, second: string): boolean {
  if (first === second) return true;
  if (Math.abs(first.length - second.length) > 1) return false;
  // 两种情况
  // 长度相等 只有一位不相等
  [first, second] =
    first.length > second.length ? [first, second] : [second, first];
  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return first.substring(i + 1) === second.substring(i + 1);
      }
    }
  }
  // 长度差一位 短的是长的子序列
  if (Math.abs(first.length - second.length) === 1) {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return first.substring(i + 1) === second.substring(i);
      }
    }
  }

  return false;
}

console.log("oneEditAway", oneEditAway("pac1", "pac"));
