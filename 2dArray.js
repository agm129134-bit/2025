var Score = [
  [70, 80, 90, 60, 80],
  [80, 90, 70, 75, 85],
  [85, 85, 80, 90, 80]
];

// var totalSum = 0;   // 所有分數的總和
// var totalCount = 0; // 所有分數的數量

for (var i = 0; i < Score.length; i++) {
  var sum = 0;
  for (var j = 0; j < Score[i].length; j++) {
    sum += Score[i][j];
  }

  var avg = sum / Score[i].length;
  console.log("第 " + (i + 1) + " 位平均：" + avg);

  // 把這組的成績加進總和中
//   totalSum += sum;
//   totalCount += Score[i].length;
}

// 算全部分數的總平均
// var totalAvg = totalSum / totalCount;
// console.log("全部分數的總平均：" + totalAvg);
