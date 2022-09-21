// Get the js file to upload
var currentDate = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log(currentDate);

var dateEl = $("#currentDay");
dateEl.text(daysOfWeek[currentDate.getDay()] + ", " + monthsOfYear[currentDate.getMonth()] + " " + currentDate.getDate());