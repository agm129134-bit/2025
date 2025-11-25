var MAZE = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,0,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,1,0,0,0,1],
    [1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1]
];

class Point {
    constructor(r, c) {
        this.row = r;
        this.col = c;
    }
}

// 可走到的終點
var START = new Point(1, 1);
var END   = new Point(8, 8);

var Stack = [];
var Path  = [];  // 存最後的路

var CP = START;

// 方向向量（上右下左）
var DIR = [
    [-1, 0], // UP
    [0, 1],  // RIGHT
    [1, 0],  // DOWN
    [0, -1]  // LEFT
];

// DFS 主流程
do {
    MAZE[CP.row][CP.col] = 2; // 標記為已走過 (.)

    let moved = false;

    for (let d = 0; d < 4; d++) {
        let nr = CP.row + DIR[d][0];
        let nc = CP.col + DIR[d][1];

        if (MAZE[nr][nc] === 0) {   // 可走
            Stack.push(CP);
            CP = new Point(nr, nc);
            moved = true;
            break;
        }
    }

    // 死路 → 回頭
    if (!moved) {
        if (Stack.length === 0) {
            console.log("No Solution");
            break;
        }
        CP = Stack.pop();
    }

} while (CP.row !== END.row || CP.col !== END.col);

// 如果到達終點，把整個走法記錄起來（Stack + CP）
if (CP.row === END.row && CP.col === END.col) {
    Path = [...Stack, CP];

    // 標記最終路徑為 *
    for (let p of Path) {
        MAZE[p.row][p.col] = 3;
    }
}

// ========= 印出迷宮 ================
function printMaze() {
    let out = "";
    for (let r = 0; r < MAZE.length; r++) {
        for (let c = 0; c < MAZE[0].length; c++) {
            let v = MAZE[r][c];
            if (r === START.row && c === START.col) out += "S";
            else if (r === END.row && c === END.col) out += "E";
            else if (v === 1) out += "█";      // 牆壁
            else if (v === 2) out += ".";      // DFS 走過的路
            else if (v === 3) out += "*";      // 最後路徑
            else out += " ";                   // 空地
        }
        out += "\n";
    }
    console.log(out);
}

printMaze();
