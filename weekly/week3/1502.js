/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length <= 2) return true;
  quickSort(arr);
  for (let i = 1; i < arr.length - 1; i++) {
    // console.log(arr[i] + arr[arr.length - i - 1], arr[mid] * 2);
    if (arr[i] * 2 !== arr[i - 1] + arr[i + 1]) {
      return false;
    }
  }
  return true;
};

var quickSort = (arr) => {
  return _quickSort(arr, 0, arr.length - 1);
};

var _quickSort = (arr, p, r) => {
  if (p >= r) return;
  let q = partition(arr, p, r);
  _quickSort(arr, p, q - 1);
  _quickSort(arr, q + 1, r);
  return arr;
};

var partition = (arr, p, r) => {
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (arr[j] < arr[r]) {
      [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
      i++;
    }
  }

  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
  return i + 1;
};

const acc = canMakeArithmeticProgression([1, 3, 5, 7, 9]);

console.log("acc", acc);
