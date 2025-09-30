// function avg(score){
//  var sum=0, average=0;//1
//  for(var i=0;i<score.length;i++){//n+1
//     sum += score[i];  //n
// }
// if(score.length>0)//1
//     average=sum/score.length;
// return average;//1
// }
// var Score=[50,20,30,15,16,21,33,11,9,27];
// console.log(Score.toString()+" average:"+ avg(Score));

unction avg(Score){
 var sum=0;//1
 for(var i=0;i<Score.length;i++){//n+1
    sum += Score[i];  //n
}
return (Score.length>0)? sum/Score.length:0;
}
var Score=[50,20,30,15,16,21,33,11,9,27];
console.log(Score.toString()+" average:"+ avg(Score));