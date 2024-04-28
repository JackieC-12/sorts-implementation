function selectionSort(arr){
// 1. Set MIN to location 0.
// 2. Search the minimum element in the list.
// 3. Swap with value at location MIN.
// 4. Increment MIN to point to next element.
// 5. Repeat until list is sorted.

let sorted = []

while (arr.length){
    sorted.push(Math.min(...arr))
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
}

return sorted
}

let arr = [4, 3, 66, 5, 8]

console.log(selectionSort(arr))
