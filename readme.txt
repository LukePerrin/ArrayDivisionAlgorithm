The objective is..
 Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.
 Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.    

Answer..
 There is a returnContents function.

 The function creates N number of arrays with the orginal contents put in each element. 
 Any remainders are appended to a final array and added on to this 2d array.
 The result is printed to the console as well as the original array and N number.   

 Make sure you have NodeJS installed and type
 node server.js