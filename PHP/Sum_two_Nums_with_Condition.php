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

