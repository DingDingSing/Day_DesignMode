function flatten(nums: any[]): any[] {
  return nums.reduce((pre, after) => {
    return pre.concat(Array.isArray(after) ? flatten(after) : after);
  }, []);
}

const flattenNums = flatten([
  1,
  [2, 3],
  [
    [4, 5],
    [6, 7],
  ],
  [[[8]], [9]],
]);
console.log(flattenNums);
