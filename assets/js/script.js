// Display current day
var today = moment();
var currentHour = today.hour();
var rowEl = $(".customRow");
var textAreaEl = $("textarea");
var dayPlan = JSON.parse(localStorage.getItem(today.format("dddd[, ]Do[ of ] MMMM"))) || [];

// Display any locally stored information to the page
if (dayPlan.length > 0) {
    for (var i = 0; i < dayPlan.length; i++) {        
        $("p:contains('" + dayPlan[i].eventHour + "')").siblings('textarea').text(dayPlan[i].eventText);        
    }
}

// Display current day
$("#currentDay").text(today.format("dddd[, ]Do[ of ] MMMM"));

// Color each time slot in relation to current time
textAreaEl.each(function (index) {
    var rowTime = index + 9;
    if(currentHour > rowTime){
        $(textAreaEl[index]).addClass("past");
    }else if(currentHour === rowTime) {
        $(textAreaEl[index]).addClass("present");
    }else {
        $(textAreaEl[index]).addClass("future");
    }
});

// Handler for clicking the save button
function saveButtonHandler(e) {
    var plan = {};    
    
    // Check for click on <button> or <i>
    if($(e.target).is('i')) {
        plan.eventText = $(e.target).parent('button').siblings('textarea').val()
        plan.eventHour = $(e.target).parent('button').siblings('p').text()
    }else {
        plan.eventText = $(e.target).siblings('textarea').val();
        plan.eventHour = $(e.target).siblings('p').text();
    }

    if (dayPlan.length === 0)
    {
        dayPlan.push(plan);
    }else {
        var doesContain = false;

        // Check to see if they are updating time block or submitting to a new one
        for(var i = 0; i < dayPlan.length; i++) {
            if (dayPlan[i].eventHour === plan.eventHour) {
                dayPlan[i].eventText = plan.eventText
                doesContain = true;
            } 
        }
        
        if(!doesContain) {
            dayPlan.push(plan);
        }
    }    
    localStorage.setItem(today.format("dddd[, ]Do[ of ] MMMM"), JSON.stringify(dayPlan));      
}

rowEl.on('click', '.saveBtn', saveButtonHandler);