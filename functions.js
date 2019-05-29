//FUNCTIONS 

//Functions let us wrap bits of code up into REUSABLE packages.  They are one of the building blocks of JS.

//Declare a function first:
function doSomething() {
    console.log("HELLO WORLD");
}

//Then call it:
doSomething();
doSomething();
doSomething();
doSomething();



//Suppose I want to write code to sing "Twinkle Twinkle Little Star"
console.log("Twinkle, twinkle, little star,");
console.log("How I wonder what you are!");
console.log("Up above the world so high,");
console.log("Like a diamond in the sky.");
//To sing it again, I have to rewrite all the code.  This is not DRY!
console.log("Twinkle, twinkle, little star,");
console.log("How I wonder what you are!");
console.log("Up above the world so high,");
console.log("Like a diamond in the sky.");
//We can write a function to help us out
function singSong() {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
//To sing the song, we just need to call singSong();
//to sing the entire song 4 times
singSong();
singSong();
singSong();
singSong();


//Often we want to write functions that take inputs.
function square(num) {
    console.log(num * num);
}
//Now when we call square we need to pass in a value
square(10); //prints 100
square(3); //prints 9
square(4); //prints 16


