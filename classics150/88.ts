// 88. 合并两个有序数组
// https://leetcode.cn/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 @description 方法 1 直接合并两个有序数组、再进行排序
 @description 需要注意的是：不同平台上 sort 方案实现的算法并不一致、chrome 在数组元素小于10个以内使用插入排序、在10个以上使用快速排序
 @description 详细可了解 https://segmentfault.com/a/1190000010630780
 */
function merge(nums1: number[], m: number, nums2: number[], _n: number): void {
  const t: number[] = nums1
    .slice(0, m)
    .concat(nums2)
    .sort((a, b) => a - b);
  nums1.forEach((_, i) => (nums1[i] = t[i]));
}

function merge_0(
  nums1: number[],
  m: number,
  nums2: number[],
  _n: number
): void {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
}

/**
  @description 方法 2 正向双指针 需要借助一个临时数组 、使用 while 循环控制退出条件
 */
function merge_1(nums1: number[], m: number, nums2: number[], n: number): void {
  const t: number[] = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < m && p2 < n) {
    if (nums1[p1] <= nums2[p2]) {
      t.push(nums1[p1]);
      p1++;
    } else {
      t.push(nums2[p2]);
      p2++;
    }
  }
  while (p1 < m) {
    t.push(nums1[p1]);
    p1++;
  }
  while (p2 < n) {
    t.push(nums2[p2]);
    p2++;
  }
  nums1.forEach((_, i) => (nums1[i] = t[i]));
}

/**
 @description 方法 3: 倒序双指针 不需要借助临时空间、由于nums1数组长度足够、将大的数字从后往前排、避免数据覆盖导致的排序失败问题
 */
function merge_2(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let i = m + n - 1;
  // 这里需要注意退出条件、由于是倒序对比、当num2已全部遍历完毕之后nums1未遍历数据都是有序数组、则不再需要继续遍历，仅p2作为退出条件即可
  while (p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
    i--;
  }
}

const nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;

// merge(nums1, m, nums2, n);
// merge_1(nums1, m, nums2, n);
merge_2(nums1, m, nums2, n);

console.log("nums1", nums1);
