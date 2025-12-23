let arr = [25, 37, 18, 21, 5, 21];

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;

        // 將比 key 大的往右移
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

console.log("before:", arr);
insertionSort(arr);
console.log("after :", arr);
