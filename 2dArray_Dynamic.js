var readline= require("readline-sync");

var row = readline.questionInt("How many row?");
var col = readline.questionInt("How many col?");

// 2d Array row x col
var aryRowCol=[];
for (let r = 0; r < row; r++) {
    aryRowCol.push([]);
    for (let c = 0; c < col; c++){
        aryRowCol[r].push(r*col+c+1)
    }
}

// var aryRowCol=[];
// let s =0;
// for (let r = 0; r < row; r++) {
//     aryRowCol.push([]);
//     for (let c = 0; c < col; c++){
//         s++;
//         aryRowCol[r].push(s)
//     }
// }

//aryRowCol[1][1]
//2d -> 1d : r:col+c
//1d -> 2d : 8 -> 1,1 8/col,8%col
console.log(aryRowCol)