// Display current day
var today = moment();
var currentHour = today.hour();
var rowEl = $(".customRow");
var textAreaEl = $("textarea");

$("#currentDay").text(today.format("dddd[, ]Do[ of ] MMMM"));

rowEl.each(function (index) {
    var rowTime = index + 9;
    if(currentHour > rowTime){
        $(textAreaEl[index]).addClass("past");
    }else if(currentHour === rowTime) {
        $(textAreaEl[index]).addClass("present");
    }else {
        $(textAreaEl[index]).addClass("future");
    }
});