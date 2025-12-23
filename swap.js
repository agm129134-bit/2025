function swap(arr){
    [arr[0], arr[1]] = [arr[1], arr[0]];
}

let arr = [6, 1];
console.log(arr);
swap(arr);
console.log(arr);
