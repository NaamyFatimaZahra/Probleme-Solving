<?php

// Write a PHP program to get the absolute difference between n and 51.
//  If n is greater than 51 return triple the absolute difference.


    function test($n){
            $x=51;
            return $n>=$x ? ($n-$x)*3 : $x-$n;
     }
        
        echo test(53) ."<br/>";
        echo test(30)."<br/>";
        echo test(51)."<br/>";
    ?>