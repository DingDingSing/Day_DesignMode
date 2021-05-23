// 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。

// 返回的长度需要从小到大排列。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/diving-board-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：
// shorter = 1
// longer = 2
// k = 3
// 输出： [3,4,5,6]
// 解释：
// 可以使用 3 次 shorter，得到结果 3；使用 2 次 shorter 和 1 次 longer，得到结果 4 。以此类推，得到最终结果。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/diving-board-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function divingBoard(shorter: number, longer: number, k: number): number[] {
  if (k === 0) return [];
  if (shorter === longer) return [k * shorter];
  const result = [];
  for (let i = 0; i <= k; i++) {
    result.push(shorter * (k-i) + longer *i);
  }
  return result;
}

divingBoard(1, 2, 3);
