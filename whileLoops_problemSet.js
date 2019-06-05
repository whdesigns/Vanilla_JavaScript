//............................W H I L E   L O O P S   P R O B L E M   S E T.............................//


// 1)  Print all numbers between -10 and 19
console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var counter = -10;

while(counter < 20){
	console.log(counter);
	counter++;
}



// 2)  Print all even numbers between 10 and 40
console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");
var counter = 10;

while(counter <= 40){
	console.log(counter);
	counter+=2;
}



// 3)  Print all odd numbers between 300 and 333
console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
var counter = 300;

while(counter <= 333){
	if(counter % 2 !== 0){
		console.log(counter);
	}
	counter+=1;
}



// 4)  Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var counter = 5;

while(counter <= 50){
	if(counter % 5 === 0 && counter % 3 === 0){
		console.log(counter);
	}
	counter+=1;
}
