// 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。

// 返回 合并后的字符串 。
function mergeAlternately(word1: string, word2: string): string {
  const max = Math.max(word1.length, word2.length);
  let result = "";
  for (let i = 0; i < max; i++) {
    const s1 = word1[i];
    const s2 = word2[i];

    if (s1 && s2) {
      result += s1 + "" + s2;
    }

    if (s1 === undefined) {
      result += word2.slice(i);
      break;
    }

    if (s2 === undefined) {
      result += word1.slice(i);
      break;
    }
  }

  return result;
}

const w1 = "apasdff";
const w2 = "pccd";

const s1 = mergeAlternately(w1, w2);

console.log("s1", s1);
