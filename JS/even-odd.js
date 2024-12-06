//Methode1
evenOdd(5);
function evenOdd(value) {
  if (value % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
//return odd
//Methode2
evenOdd(4);
function evenOdd(value) {
  return value % 2 == 0 ? console.log("even") : console.log("odd");
}
//return even
