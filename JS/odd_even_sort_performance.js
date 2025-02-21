function oddEven(arr) {
  Start = performance.now();
  let even = [];
  let odd = [];
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }

  end = performance.now();
  return [odd, even, (executionTime = end - Start)];
}

console.log(oddEven([1, 2, 5, 7, 4, 3, 2]));
