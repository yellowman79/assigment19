var city = "Karachi";
if (city !== "Karavi") {
  console.log("The City OF Lights");
}

var variable1 = 11;
var variable2 = 12;
if (variable1 >= variable2) {
  variable1 = 12;
}

if (11 !== 12) {
  alert("Congratulations! You guessed correctly.");
}

var firstName = prompt("Please enter your first name.");
if (firstName !== "Sheri") {
  alert("No match");
}

var studentNames = [];
var studentObjects = [];
var stringsArray = ["apple", "banana", "cherry"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true, false];
var mixedArray = ["apple", 1, true, "banana", 2, false, "cherry", 3];
var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log("Student Names:", studentNames);
console.log("Student Objects:", studentObjects);
console.log("Strings Array:", stringsArray);
console.log("Numbers Array:", numbersArray);
console.log("Boolean Array:", booleanArray);
console.log("Mixed Array:", mixedArray);
console.log("Qualifications Array:", qualifications);    



// Initialize an array with color names
let colors = ['red', 'green', 'blue'];

// Display the array elements in the browser
document.write('Initial colors: ' + colors.join(', ') + '<br>');

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array
let newColor = prompt('Enter a color to add to the beginning:');
colors.unshift(newColor);

// Display the updated array in the browser
document.write('Updated colors after adding to the beginning: ' + colors.join(', ') + '<br>');

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array
newColor = prompt('Enter a color to add to the end:');
colors.push(newColor);

// Display the updated array in the browser
document.write('Updated colors after adding to the end: ' + colors.join(', ') + '<br>');

// c. Add two more color to the beginning of the array
colors.unshift('yellow', 'orange');

// Display the updated array in the browser
document.write('Updated colors after adding two colors to the beginning: ' + colors.join(', ') + '<br>');

// d. Delete the first color in the array
colors.shift();

// Display the updated array in the browser
document.write('Updated colors after deleting the first color: ' + colors.join(', ') + '<br>');

// e. Delete the last color in the array
colors.pop();

// Display the updated array in the browser
document.write('Updated colors after deleting the last color: ' + colors.join(', ') + '<br>');

// f. Ask the user at which index he/she wants to add a color & color name
let index = parseInt(prompt('Enter the index where you want to add a color:'));
newColor = prompt('Enter a color to add:');
colors.splice(index, 0, newColor);

// Display the updated array in the browser
document.write('Updated colors after adding at index ' + index + ': ' + colors.join(', ') + '<br>');

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
index = parseInt(prompt('Enter the index where you want to delete colors:'));
let count = parseInt(prompt('Enter the number of colors you want to delete:'));
colors.splice(index, count);

// Display the updated array in the browser
document.write('Updated colors after deleting ' + count + ' color(s) at index ' + index + ': ' + colors.join(', ') + '<br>');
