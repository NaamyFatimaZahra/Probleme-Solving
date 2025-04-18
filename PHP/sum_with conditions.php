<?php

// 3. Write a PHP program to check two given integers, and return true if one of them is 30 or if their sum is 30.
// Sample Input:
// 30, 0
// 25, 5
// 20, 30
// 20, 25
// Sample Output:
// bool(true)
// bool(true)
// bool(true)
// bool(false)




  function test($num1,$num2){
      
      if($num1+$num2===30 || $num1===30 || $num2===30)
      {
          return 'true';
      }else{
          return 'false';
      }
  }
  
echo test(30, 0);
echo test(10,30);
echo test(20,10);
?>