// Create an HTML file, a CSS file, and a reset.css file
// Hook them all up together and attach this JavaScript file in a script tag

// In your HTML body, create a header and a main.
// The header should include a logo in the top left, a title in the center, and a nav tag containing 2 links: home & profile
// This will be a movie list application, so the title in the header can be "Movie List"

// In your main, create a form element that includes a required text input and a submit button.
// You will also want an unordered list element. Style the form and list in such a way that they look like 2 separate containers.

// Bring your form, input, and list elements into this JavaScript file below
//============================================================
// const form =
// const input =
// const list =
//============================================================
// Declare an array for storing movie titles below
//============================================================
// const movies =
//============================================================
// Now create a submit eventlistener, and attach it to a function called "addMovie" below
// This function should push the newly submitted movie into your movies array
// Afterwards, it should call another function called "displayMovies", passing the array in as an argument.







//============================================================
// Now create the "displayMovies" function, which receives an array as a parameter.
// This function should first empty out the contents of your list element, using the innerHTML property.
// The function then needs to loop over the array parameter, and create new list tags for each item in the array.
// These list tags will have 2 children: a span tag containing the movie title, and a delete button with an id that matches the movie's index position in the array. The delete button needs some text content -- This can either be the word "delete", or an "x"
// Hint: Remember you can access both the array element, and the index position, using a forEach loop.

// You will need to append the span tag, and the delete button to the list tag you created, then append the list tag to your unordered list element.









//=========================================================
//ADVANCED
//==========================================================
// Now that we have a functioning form adding movies to our lists, we need to implement a delete feature.
// This will happen in the "displayMovies" function.
// Add an eventlistener to the delete button you create in the "displayMovies" function, and pass in the "deleteMovie" function.
// Using the event object, access the stored index on the delete button, and use that value to splice the movie out of your movies array.
// Finally, call the "displayMovies" function again, passing in the newly altered movies array.









//=========================================================
// Finally, we want to add a feature that allows the user to cross off movies they have seen already.
// In the "displayMovies" function, add an eventlistener to the span element you create for the movie title, and pass in the "crossOffMovie" function.
// This function will toggle a new class called "watched" on the target of the event.
// In your CSS, select the "watched" class, and give it a text-decoration property with a value of line-through




