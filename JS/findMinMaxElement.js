function findMinMaxElement(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(`min${min},max${max}`);
}
findMinMaxElement([1, 2, 2, 4, 8, 12,  122]);

