const readline = require("readline-sync");

var weight=0;
while(weight<10 || weight>200){
    weight=readline.questionint("U R weight(KG)");
}
var height=0;
while(height<50 || height>230){
    readline.questionint("U R height(CM)");
}
var bmi = weight/((height/100)**2);

console.log("Hello! Your BMI value is "+bmi);
