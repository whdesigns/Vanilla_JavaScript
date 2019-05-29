//ARRAYS

//Arrays let us group data together in lists. See example below:
var friends = ["Cersei", "Tywin", "Jaimie", "Tyrion"];

//Array are indexed starting at 0.  Every slot has a corresponding number

//We can use those indices to retrieve data
var friends = ["Cersei", "Tywin", "Jaimie", "Tyrion"];
console.log(friends[0])   //"Cersei"
friends[1] + " <3 " + friends[2]  //"Tywin <3 Jaimie

//We can also update arrays
var friends = ["Cersei", "Tywin", "Jaimie", "Tyrion"];
friends[0] = "madQueen";
friends[2] = "kingSlayer";

//We can also add new data
var friends = ["Cersei", "Tywin", "Jaimie", "Tyrion"];
friends[4] = "Lancel";

//Last few things
//We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

