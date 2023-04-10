// function readBinaryWatch(turnedOn: number) {
//   const hours = [1, 2, 4, 8];
//   const minutes = [1, 2, 4, 8, 16, 32];
//   const result: number[][] = [];

//   const dfs = (k: number, path: number[]) => {
//     if (k === turnedOn) {
//       result.push(path);
//       return;
//     }

//     for (let i = 0; i < hours.length; i++) {
//       path.push(hours[i]);
//       dfs(k + 1, [...path]);
//       path.pop();
//     }

//     for (let i = 0; i < minutes.length; i++) {
//       path.push(minutes[i]);
//       dfs(k + 1, [...path]);
//       path.pop();
//     }
//   };

//   dfs(0, []);

//   return result;
// }

// const accd = readBinaryWatch(1);

// console.log("acc", accd);
