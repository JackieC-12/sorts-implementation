function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(arrA, arrB) {
    let i = 0;
    let j = 0;

    let newArr = [];


    while(i < arrA.length || j < arrB.length) {

      if(arrA[i] < arrB[j] || !arrB.length){
        newArr.push(arrA[i]);
        i++;
      }

      else{
        newArr.push(arrB[j]);
        j++;
      }

    }
    return newArr;

}


arr = [2,4,6,8,1,3,5,7,9]

console.log(mergeSort(arr))
