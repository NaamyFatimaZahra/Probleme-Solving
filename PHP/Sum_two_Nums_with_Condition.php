<?php
// . Write a PHP program to compute the sum of the two given integer values. 
// If the two values are the same, then returns triple their sum.


  $Nums=[2,2];
  $result=0;
  
  
      if($Nums[0]!=$Nums[1]){
          $result=array_sum($Nums);
      }else{
          $result=array_sum($Nums)*3;
      }
  
echo $result;


function test($x, $y) 
{
    
    return $x == $y ? ($x + $y)*3 : $x + $y;
}

// Call the test function with arguments 1 and 2, and echo the result
echo test(1, 2) . "\n";

// Call the test function with arguments 3 and 2, and echo the result
echo test(3, 2) . "\n";

// Call the test function with arguments 2 and 2, and echo the result
echo test(2, 2) . "\n";
?> 

