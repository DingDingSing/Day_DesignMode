// const _quickSort = (arr: number[]) => {
//   return _quickSort_p(arr, 0, arr.length - 1);
// };

// const _quickSort_p = (arr: number[], p: number, r: number) => {
//   if (p >= r) return;
//   const q = _partition(arr, p, r);
//   _quickSort_p(arr, p, q - 1);
//   _quickSort_p(arr, q + 1, r);
//   return arr;
// };

// const _partition = (arr: number[], p: number, r: number): number => {
//   let i = p - 1;
//   for (let j = p; j < r; ++j) {
//     if (arr[j] < arr[r]) {
//       [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
//       i++;
//     }
//   }

//   [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
//   return i + 1;
// };

// const _qs = [8, 3, 2, 1, 5, 7, 4];

// console.log("_qs", _quickSort(_qs));

// const x = { toString: () => "10", valueOf: () => -1 };

// parseInt(x);

// Math.abs(x)

// const boolean_x = new Boolean(false);

// const a = 1 + boolean_x;

// const b = '1' + boolean_x;
// console.log(a,b);

// var x = 100;

// function add(n1: number, n2: number) {
//   return function (n3: number, n4: number) {
//     return n1 + n2 + n3 + n4 + x;
//   };
// }

// const temp = add(1, 2);
// const r1 = temp(3, 4);
// console.log("r1", r1);

import './promise.js'