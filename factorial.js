function fact(n){
    if(n==1)
        return 1;
    else
        return n*fact(n-1);
}
//recursive sum
function sum(n){
    if(n==1)
        return 1;
    else
        return n+sum(n);
}

//test
var n=3;
console.log(n+"!="+fact(n-1));