function quicksort(arr) {

    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if(arr.length <= 1) return arr;

    // Pick the first value as the pivot
    let copy = arr.slice();

    let p = copy.pop();
    let left = [];
    let right = [];

    for(let i = 0; i < copy.length; i++){
        if (copy[i] < p) left.push(copy[i]);
        else right.push(copy[i]);
  }

    // Orient the pivot so that...
        // every number smaller than the pivot is to the left
        // every number larger (or equal) than the pivot is to the right
    return [...quicksort(left), p, ...quicksort(right)];
    // Recursively sort the left
    // Recursively sort the right

    // Return the left, pivot and right in sorted order

  }
