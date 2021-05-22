// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 输入: "race a car"
// 输出: false

// 反转字符串对比
function _isPalindrome(s: string): boolean {
  return (
    s.toLowerCase().replace(/(\s|[^A-Za-z0-9])/g, "") ===
    s
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
      .replace(/(\s|[^A-Za-z0-9])/g, "")
  );
}

// 双指针有bug
// function _isPalindrome(s: string): boolean {
//   let i = 0;
//   let j = s.length - 1;
//   const reg = /[A-Za-z0-9]/;

//   while (i < j) {
//     console.log("reg.test(s[i])", reg.test(s[i]));
//     if (!reg.test(s[i])) i++;
//     if (!reg.test(s[j])) j--;
//     if (s[i].toLowerCase() === s[j].toLowerCase()) {
//       i++;
//       j--;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// console.log("asaa", _isPalindrome("A man, a plan, a canal: Panama"));
