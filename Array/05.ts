// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

function replaceSpace(s: string): string {
  return s.replace(/\s/g, "%20");
}

console.log("replace", replaceSpace("We are happy."));
