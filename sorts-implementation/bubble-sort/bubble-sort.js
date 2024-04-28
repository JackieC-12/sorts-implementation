function bubbleSort(arr){
// 1. If the current value is greater than its neighbor to the right
for (let i = 0; i < arr.length; i++){

    // 2. Swap those values
    if (arr[i] > arr[i + 1]){
        let tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp
    }

    // 3. If you get to the end of the array and no swaps have occurred, return
}
// 4. Otherwise, repeat from the beginning

return arr
}


let arr = [4, 3, 66, 5, 8]


console.log(bubbleSort(arr))
