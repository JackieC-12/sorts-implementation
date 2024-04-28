function insertionSort(arr){
    // 1. If it is the first element, it is already sorted; return 1.
    // 2. Pick next element.
    // 3. Compare with all elements in the sorted sub-list.
    // 4. Shift all the elements in the sorted sub-list that is greater than the value
    //   to be sorted.
    // 5. Insert the value.
    // 6. Repeat until list is sorted.
    let div = 1;

    while(div < arr.length){
      console.log(arr.join(','));

      let curr = arr[div];
      let i = div;

      for (i; i > 0; i--){
        if (arr[i - 1] < curr) break;
        else arr[i] = arr[i - 1];
      }

      arr[i] = curr;
      div++;
    }
}

arr = [3, 2, 0, 4, 1]
