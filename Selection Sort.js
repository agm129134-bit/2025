let arr = [87, 38, 77, 38, 25, 21, 1];

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(arr){
    let n = arr.length;

    for(let i = 0; i < n - 1; i++){
        let minIndex = i;

        // 找未排序區最小值
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        // 把最小值換到前面
        if(minIndex !== i){
            swap(arr, i, minIndex);
        }
    }
}

console.log("before:", arr);
selectionSort(arr);
console.log("after :", arr);
