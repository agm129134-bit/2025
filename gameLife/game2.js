process.stdout.setEncoding('utf8');
const LIVE = 1, DEAD = 0;
const readline = require("readline-sync");

class Life {
  constructor(_row, _col) {
    this.row = _row;
    this.col = _col;
    this.grid = [];

    for (let r = 0; r < _row; r++) {
      this.grid.push([]);
      for (let c = 0; c < _col; c++) {
        this.grid[r].push(DEAD);
      }
    }
  }

  getStatusAt(_row, _col) {
    if (_row < 0 || _col < 0 || _row >= this.row || _col >= this.col) {
      return DEAD;
    } else {
      return this.grid[_row][_col];
    }
  }

  neighborCount(_row, _col) {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (!(dr === 0 && dc === 0)) {
          count += this.getStatusAt(_row + dr, _col + dc);
        }
      }
    }
    return count;
  }

  update() {
    const nextGrid = JSON.parse(JSON.stringify(this.grid));
    for (let r = 0; r < this.row; r++) {
      for (let c = 0; c < this.col; c++) {
        const n = this.neighborCount(r, c);
        if (this.grid[r][c] === LIVE) {
          nextGrid[r][c] = n < 2 || n > 3 ? DEAD : LIVE;
        } else {
          nextGrid[r][c] = n === 3 ? LIVE : DEAD;
        }
      }
    }
    this.grid = nextGrid;
  }

  initPattern(pattern, startRow = 0, startCol = 0) {
    for (let [r, c] of pattern) {
      const rr = r + startRow;
      const cc = c + startCol;
      if (rr >= 0 && cc >= 0 && rr < this.row && cc < this.col) {
        this.grid[rr][cc] = LIVE;
      }
    }
  }

  show() {
    console.clear();
    for (let r = 0; r < this.row; r++) {
      let line = "";
      for (let c = 0; c < this.col; c++) {
        line += this.grid[r][c] === LIVE ? "⬛" : "⬜";
      }
      console.log(line);
    }
  }
}

// === 形狀資料庫 ===
const SHAPES = {
  block: [
    [0, 0], [0, 1],
    [1, 0], [1, 1],
  ],
  blinker: [
    [0, 1], [1, 1], [2, 1],
  ],
  glider: [
    [0, 1], [1, 2],
    [2, 0], [2, 1], [2, 2],
  ],
  lwss: [
    [0, 1], [0, 4],
    [1, 0], [2, 4],
    [3, 0], [3, 3], [3, 4],
    [1, 4], [2, 4],
  ]
};

// === 主程式 ===
(async () => {
  console.log("=== Conway's Game of Life ===");
  const rows = readline.questionInt("Grid rows? ( 10~30) ");
  const cols = readline.questionInt("Grid cols? ( 10~30) ");

  const game = new Life(rows, cols);

  // 輸入形狀
  console.log("可選形狀: block, blinker, glider, lwss");
  let shapeName = readline.question("Shape name? ").toLowerCase();

  if (!SHAPES[shapeName]) {
    console.log("未知形狀，使用 glider 預設。");
    shapeName = "glider";
  }

  const startRow = readline.questionInt(" row? (0~" + (rows - 1) + ") ");
  const startCol = readline.questionInt(" col? (0~" + (cols - 1) + ") ");

  // 放入形狀
  game.initPattern(SHAPES[shapeName], startRow, startCol);

  // 模擬
  const gens = readline.questionInt("round? ( 10~100) ");
  const delay = readline.questionInt(" (ms)? ( 300~800) ");

  for (let i = 0; i < gens; i++) {
    console.log(`第 ${i + 1} 代`);
    game.show();
    game.update();
    await new Promise((r) => setTimeout(r, delay));
  }

  console.log("模擬結束 🎉");
})();
