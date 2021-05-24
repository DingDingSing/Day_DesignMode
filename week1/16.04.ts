// 设计一个算法，判断玩家是否赢了井字游戏。输入是一个 N x N 的数组棋盘，由字符" "，"X"和"O"组成，其中字符" "代表一个空位。
// 以下是井字游戏的规则：
// 玩家轮流将字符放入空位（" "）中。
// 第一个玩家总是放字符"O"，且第二个玩家总是放字符"X"。
// "X"和"O"只允许放置在空位中，不允许对已放有字符的位置进行填充。
// 当有N个相同（且非空）的字符填充任何行、列或对角线时，游戏结束，对应该字符的玩家获胜。
// 当所有位置非空时，也算为游戏结束。
// 如果游戏结束，玩家不允许再放置字符。
// 如果游戏存在获胜者，就返回该游戏的获胜者使用的字符（"X"或"O"）；如果游戏以平局结束，则返回 "Draw"；如果仍会有行动（游戏未结束），则返回 "Pending"。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/tic-tac-toe-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入： board = ["O X"," XO","X O"]
// 输出： "X"

// 输入： board = ["OOX","XXO","OXO"]
// 输出： "Draw"
// 解释： 没有玩家获胜且不存在空位

// 输入： board = ["OOX","XXO","OX "]
// 输出： "Pending"
// 解释： 没有玩家获胜且仍存在空位

function tictactoe(board: any[]) {
  const m = board.length;
  const s = [];
  //   const row =[]

  for (let i = 0; i < m; i++) {
    board[i] = board[i].split("");
    const row = [];
    const d_1 = [];
    const d_2 = [];

    for (let j = 0; j < board.length; j++) {
      row.push(board[j][i]);
      d_1.push(board[j][j]);
      d_2.push(board[j][m - j - 1]);
      if (board[i][j] === " ") s.push(" ");
    }
    // 行相同
    if (board[i].every((item: any) => item === "X")) return "X";
    if (board[i].every((item: any) => item === "O")) return "O";
    // 列相同
    if (row.every((item: any) => item === "X")) return "X";
    if (row.every((item: any) => item === "O")) return "O";
    // 对角线
    if (d_1.every((item: any) => item === "X")) return "X";
    if (d_1.every((item: any) => item === "O")) return "O";

    if (d_2.every((item: any) => item === "X")) return "X";
    if (d_2.every((item: any) => item === "O")) return "O";
  }
  return s.length ? "Pending" : "Draw";
}

const aati = tictactoe(["O X", "  O", "X O"]);

console.log("aati", aati);
