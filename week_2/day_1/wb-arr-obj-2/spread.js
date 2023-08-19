/*
  Once you complete a problem, refresh ./spread.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

/* Use the spread operator to create a copy of the product object below.  Name the copy "productCopy" */

let product = {
  id: 54,
  name: 'santa hat',
  price: 6,
  imageUrl: 'https://i.ebayimg.com/images/g/9T4AAOSwbmdZf2jN/s-l640.jpg',
};

// code here

////////// PROBLEM 2 //////////

/* Use the spread operator to create a copy of the colors array below.  Name the copy "colorsCopy" */

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// code here

////////// PROBLEM 3 //////////

/* Here we have an array with 3 numbers, and a function that takes in 3 numbers as arguments.  Invoke addNums, and use the spread operator to pass in the numbers from the numbers array; and store the value to a variable named result */

let numbers = [4, 6, 10];

function addNums(num1, num2, num3) {
  return num1 + num2 + num3;
}

// code here

////////// PROBLEM 4 //////////

/* Using the spread operator, concatentate the two arrays below and save it to a variable named "combinedArrays" */

let arr1 = ['dog', 'chameleon', 'monkey'];
let arr2 = ['bear', 'tiger', 'liger'];

// code here
