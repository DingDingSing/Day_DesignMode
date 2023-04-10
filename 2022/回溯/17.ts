// 17. 电话号码的字母组合
function letterCombinations(digits: string): string[] {
  const phone = new Map();
  phone.set("2", ["a", "b", "c"]);
  phone.set("3", ["d", "e", "f"]);
  phone.set("4", ["g", "h", "i"]);
  phone.set("5", ["j", "k", "l"]);
  phone.set("6", ["m", "n", "o"]);
  phone.set("7", ["p", "q", "r", "s"]);
  phone.set("8", ["t", "u", "v"]);
  phone.set("9", ["w", "x", "y", "z"]);

  const result: string[] = [];

  const dfs = (nums: string[], k: number, path: string[]) => {
    if (!nums.length) return;
    if (k === nums.length) {
      result.push(path.toString().replace(/,/g, ""));
      return;
    }
    const items = phone.get(nums[k]);
    for (let item of items) {
      path.push(item);
      dfs(nums, k + 1, [...path]);
      path.pop();
    }
  };

  const nums = digits.split("");
  dfs(nums, 0, []);

  return result;
}

const letterCombinationsExample = letterCombinations("23");

console.log("letterCombinationsExample", letterCombinationsExample);
