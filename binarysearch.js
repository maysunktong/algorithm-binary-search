let arr = [-6, -3, 1, 2, 5, 7, 9, 10, 26];

/* Binary Search */
let start = 0;
let end = arr.length - 1;
let middle = Math.floor((start + end) / 2);

function binarySearch(arr, elem) {
  while (arr[middle] !== elem && start <= end) {
    if (arr[middle] < elem) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : "The element is not in the array!";
}

console.log(binarySearch(arr, 2));

/* MAY */
