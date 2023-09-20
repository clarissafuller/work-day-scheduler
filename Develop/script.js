var scheduleInput = document.querySelector("#description");
var saveButton = document.querySelector("#saveBtn");
var currentDayEl = document.querySelector("#currentDay");
// var date = dayjs();
// console.log(date);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var date = dayjs().format("dddd MMMM, D");
$("#currentDay").text(date);

// $(function

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// function renderSavedSchedule() {
//   var textInput = localStorage.getItem("text");

//   textInput.textContent = text;
// }

//   saveButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     var schedule = scheduleInputInput.value;
//     console.log(scheduleInput.value);

//     localStorage.setItem("text", schedule);
//     renderSavedSchedule();
//   });
// });

// function getApi() {
//   var requestUrl = "";

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

// });
// fetchButton.addEventListener("click", getApi)
