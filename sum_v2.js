//clac 1-2-3+3-4+...+n
function sum2(n){
    var sum=0;
    if (n<=0){
        console.log("error: n must >0");
        return;
    }else{
        for(var i=1;i<=n;i++){
            // if(i%2==0)  //even
            //     sum -= i;
            // else
            //     sum += i;  //odd
            (i%2==0) ? sum -= i : sum += i;
        }
        return sum;
    }
        
}
        //test
        var n=100;
        console.log("1-2+3-4=...+"+n+"="+sum2(n));