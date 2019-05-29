//DRY: Don't Repeat Yourself
//We want to keep our code as DRY as possible. It saves us a ton of time and makes the code cleaner.


//WHILE LOOPS
//Repeat code WHILE a condition is true


//Printing numbers from 1-5
var count = 1;
while(count < 6) {
 console.log("count is: " + count);
 count++;
}
//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5


//Printing each character in a string
//string we're looping over:
var str = "hello";
//first character is always set at 0
var count = 0;    
while(count < str.length) {
 console.log(str[count]);
 count++;
}
//"h"
//"e"
//"l"
//"l"
//"o"


//Infinite loops will occur when the terminating condition in a loop is never true
var count = 0;


//The example below prints "0" over and over because count is never incremented
while(count < 10) {
 console.log(count);
}

