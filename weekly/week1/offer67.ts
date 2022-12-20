// 写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。

function strToInt(str: string) {
  const ss = str.trim();
  const reg = /^([0-9])|-|\+/;
  if (!reg.test(ss)) return 0;
  let s = ss[0];
  for (let i = 1; i < ss.length; i++) {
    if (/[0-9]/.test(ss[i])) {
      s += ss[i];
    } else {
      break;
    }
  }
  console.log("Number(s)", Number(s));
  if (Number(s) > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  if (Number(s) < Math.pow(-2, 31)) return Math.pow(-2, 31);
  return s === "-" || s === "+" ? 0 : Number(s);
}

// console.log("ww", strToInt("     11919730356x"));
