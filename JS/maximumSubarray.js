console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function maximumSubarray(arr) {
  let sum = 0;
  let newArray = [...new Set(arr)];
  for (let i = 1; i <= newArray.length; i++) {
    if (newArray[i] >= -1) {
      sum += newArray[i];
    }
  }
  return sum;
}

// function maximumSubarray(arr){

//   return arr.reduce((acc,curr)=>{
//      if(acc>=(-1)){
//           return true
//      }else{
//           return false
//      }

//   })

// }
