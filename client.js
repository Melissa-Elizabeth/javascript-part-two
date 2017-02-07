// var zombieOne = 'Luke';
// var zombieTwo = 'Paul';
// var zombieThree = 'Fred';
//
//
//
// var zombieArray = ['Kris', zombieTwo, 'Catherine', 'Jeremy'];
// var zombieArrayTwo = ['Rabbit', 'Cow'];
//
// console.log(zombieArray[1]);
// zombieArray.push(zombieOne); //.push adds to the end
// zombieArray.push(zombieThree);
// console.log(zombieArray[5]);
//
// zombieArray.unshift(zombieThree); //.unshift add to beginning
// console.log(zombieArray[0]);
//
// zombieArray.pop(); //.pop removes from the end
//
// zombieArray.shift(); //.shift removes from beginning
//
// var whoGotPopped =zombieArray.pop();
// console.log(whoGotPopped);
//
// console.log(zombieArray.length);
//
// zombieArray[2] = 'Steve';
// zombieArray[3] = 'Carla';
// zombieArray[7] = 'Cody';
//
// for(var i = 0; i < zombieArray.length; i++) {
//   console.log(zombieArray[i]);
// }
// shortcut for 'for' loop: for {tab}
//
// console.log(whoIsAZombie(zombieArray));
// console.log(whoIsAZombie(zombieArrayTwo));
//
// function whoIsAZombie(zombies) {
//   // console.log('zombies: ', zombies);
//   // console.log('zombies[0]: ', zombies[0]);
//   return zombies[0] + ' and ' + zombies[1] ;
// }

// var numberArray = [1, 2, 3, 4, 5];
// var numberArrayTwo = [6, 7, 8, 9, 10, 11, 12];
// console.log(myFunction(numberArray));
// console.log(myFunction(numberArrayTwo));
// function myFunction(number) {
//   return number[0] + number[3];
// }

var ballOfString = "yarn";

// var firstLetter = ballOfString.charAt(0);
var firstLetter = ballOfString[0];
var stringLength =ballOfString.length;
var middleTwoLetters = ballOfString.substring(1, 3);
var firstTwoLetters = ballOfString.substring(0, 2);
var lastTwoLetters = ballOfString.substring(stringLength - 2, stringLength); //.substring will return part of a string (First number is first number you want, last number is first number you don't want)
console.log(firstTwoLetters);

var commaSeperateValues = "one,two,three,four";

var newArray = commaSeperateValues.split(',');

console.log(newArray);
