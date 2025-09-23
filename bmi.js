const readline = require("readline-sync");

var weight=readline.questionFloat("U R weight(KG)");
var height=readline.questionFloat("U R height(CM)");
var bmi = weight/((height/100)**2);

console.log("Hello! Your BMI value is "+bmi);
