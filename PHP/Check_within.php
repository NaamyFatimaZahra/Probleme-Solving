<?php
//  Write a PHP program to check a given integer and return true if it is within 10 of 100 or 200.
// Sample Input:
// 103
// 90
// 89
// Sample Output:
// bool(true)
// bool(true)
// bool(false) 

// Solution avec une approche native en PHP


  function test1($num){
      
      if( $num-100<=10 && $num-100>=-10 ||  $num-200<=10 && $num-200>=-10  )
      {
          return 'true';
      }else{
          return 'false';
      }
  }
  
echo test1(89);
echo test1(90);
echo test1(190);


// Solution avec une approche native mais plus propre 


  function test2($num){
      
      return abs($num-100)<=10 ||  abs($num-200)<=10 ?'true':'false';
     
  }
  
echo test2(89);
echo test2(90);
echo test2(190);