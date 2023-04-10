function calculate(str: string) {
  const stack: any[] = [];
  let num = 0;
  let sign = "+";
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (/\d/.test(c)) {
      num = num * 10 + parseInt(c);
    }
    if (c === "(") {
      const j = findClosingBracket(str, i) as number;
      num = calculate(str.slice(i + 1, j));
      i = j;
    }
    if ((!/\d/.test(c) && c !== " ") || i === str.length - 1) {
      switch (sign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(Math.trunc(stack.pop() / num));
          break;
      }
      sign = c;
      num = 0;
    }
  }
  return stack.reduce((acc, curr) => acc + curr, 0);
}

function findClosingBracket(str: string, start: number) {
  let count = 0;
  for (let i = start; i < str.length; i++) {
    if (str.charAt(i) === "(") {
      count++;
    } else if (str.charAt(i) === ")") {
      count--;
      if (count === 0) {
        return i;
      }
    }
  }
}

console.log(calculate("10+(-2)*(3-1)/2")); // 8
