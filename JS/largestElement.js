function findLargestElement(arr) {
  let largestElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}
console.log(findLargestElement([1, 2, 2, 4, 8, 12, 122]));
