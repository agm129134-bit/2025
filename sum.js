// function sum(n){
//     var result=0;
//     var i=0
//     while(i++ <= n){
//         result += i;
//     }
//     return result;
// }

//test
function sum(n){
    var result=0;
    var i=1;
    do{
        result += i;
    }while(i++ < n);
    return result;
}

var n=10;
console.log("1+2+...+"+n+"="+sum(n));