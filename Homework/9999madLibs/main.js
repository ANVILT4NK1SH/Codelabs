// Variables for user input
const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

// Variables to display the mad lib
const madLibDisplay = document.querySelector(".mad-lib");

// Variable for the form
const form = document.querySelector("form");

// Variable for the mad lib story
const story = 'My friends and I started a secret club! We meet everyday by the '

form.addEventListener("submit", function(event) {
  event.preventDefault();

  madLibDisplay.innerHTML = story.replace('${adj1}', adj1.value);
});