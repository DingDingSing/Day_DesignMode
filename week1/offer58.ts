// 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入: "the sky is blue"
// 输出: "blue is sky the"

// 输入: "  hello world!  "
// 输出: "world! hello"

function reverseWords(s: string): string {
  const sa = s
    .replace(/(^\s*)|(\s*$)/g, "")
    .replace(/(\s+)/g, " ")
    .split(" ");

  let i = 0;
  let j = sa.length - 1;
  while (i < j) {
    [sa[i], sa[j]] = [sa[j], sa[i]];
    i++;
    j--;
  }
  return sa.join(" ");
}

console.log("words", reverseWords("     he sky is      blue     "));
