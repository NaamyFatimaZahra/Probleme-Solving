console.log(TwoSumIndex([1, 2, 3, 5, 6], 6));

function TwoSumIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}
// return [0,3]
