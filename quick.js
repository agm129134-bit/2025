let arr = [82, 22, 63, 45, 17, 39, 96, 55];

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// partition（Hoare 風格，pivot = arr[left]）
function partition(arr, left, right){
    let pivot = arr[left];
    let i = left;
    let j = right;

    while(i < j){
        while(i < j && arr[j] >= pivot) j--;
        while(i < j && arr[i] <= pivot) i++;
        if(i < j){
            swap(arr, i, j);
        }
    }
    swap(arr, left, i); // pivot 歸位
    return i;
}

function quickSortIterative(arr){
    let stack = [];

    // 初始整段區間
    stack.push({ left: 0, right: arr.length - 1 });

    while(stack.length > 0){
        let { left, right } = stack.pop();
        if(left >= right) continue;

        let pivotIndex = partition(arr, left, right);

        // 右半段先推（不影響正確性）
        stack.push({ left: pivotIndex + 1, right: right });
        stack.push({ left: left, right: pivotIndex - 1 });
    }
}

console.log("before:", arr);
quickSortIterative(arr);
console.log("after :", arr);
