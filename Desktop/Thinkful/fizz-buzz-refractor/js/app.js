  // Global Variables.
  var itemText = "";  // Sets Text and adds li .
  var author = "Mackenzie Abby"; // Author Name.
  var userInput = prompt("Enter a Number from 10 - 100"); // user input.

  // Variables.
  // Fizz Buzz Variable.
  function fizzBuzz() { 
  for (var i = 1; i <= userInput; i++) { 
  itemText += "<li>"; // Adds Li.
  if ( i % 15 == 0)  // If Divisible by 15 and remainder is 0.
  itemText += "Fizz Buzz";
  else if (i % 3 == 0) // If Divisible by 3 and remainder is 0.
  itemText += "Fizz";
  else if ( i % 5 == 0) // If Divisible by 5 and remainder is 0.
  itemText += "Buzz";
  else 
  itemText += i; // Add the remainder numbers that are not Divisible.
  itemText += "</li>"; // Closes li.
  }
  }
  // Validation for Input.
  function validation() {
  if (userInput % 1 != 0 ) { // Checks if a Whole Number.
  alert("no decimals and no letters allowed");
  clearData(); // Clears Data.
  } 
  else if (userInput > 100) { // Checks if number is greater than 100.
  alert("Please enter a number between 10 and 100");
  clearData(); // Clears Data.
  } 
  else if (userInput < 10) {
  alert("Please enter a number between 10 and 100"); // Checks if number is less than 10.
  clearData(); // Clears Data.
  }
  else {
  fizzBuzz();
  }
  }
  // Creates Variable for adding itemText.
  function insertDoc() { 
  document.getElementById("list").innerHTML += itemText
  }
  // Creates Variable for author.
  function devAuthor() {  
  document.getElementById("author").innerHTML += author
  }
  // Clear.
  function clearData() {
    itemText.hide();
  }
  // Calls Functions onload.
  window.onload = function(event) { 
  console.log("window loaded");
  fizzBuzz();
  validation();
  insertDoc();
  devAuthor();
  clearData();
}
