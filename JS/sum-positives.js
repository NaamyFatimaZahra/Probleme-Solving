console.log(sumOfPositivesNums([1, -3, 4]));

//Methode1
function sumOfPositivesNums(arr) {
  return arr
    .filter((x) => (x > 0 ? x : 0))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
}
//Methode2
function sumOfPositivesNums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}
