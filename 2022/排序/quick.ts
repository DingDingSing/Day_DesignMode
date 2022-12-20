class QuickSort {
  static sort(nums: number[], lo: number, hi: number): number[] {
    // 定义退出条件
    if (hi >= lo) return nums;
    // 分区方法
    const p = QuickSort.partition(nums, lo, hi);
    QuickSort.sort(nums, lo, p - 1);
    QuickSort.sort(nums, p + 1, hi);
    return nums;
  }
  static partition(nums: number[], lo: number, hi: number): number {
    // 分区算法
  }
}
