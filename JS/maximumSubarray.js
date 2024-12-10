

// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 






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
