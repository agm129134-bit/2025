const readline = require("readline-sync");
var weight=readline.question("U R weight(KG)");
var height=readline.question("U R height(CM)");
var bmi = weight/((height/100)**2);

console.log("Hello! Your BMI value is "+bmi);
