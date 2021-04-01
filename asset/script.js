// shows the current date for the header
const headingDate = moment().format("MMMM, Do YYYY");
$("#currentDay").text(headingDate);
// the current date and time.
const now = moment();
// the current time in hour.
const currentHour = now.hours();

$(document).ready(function () {

    backgroundColor()

    // stores the users text content for each time block when they press the save button
    $('.saveBtn').on('click', function () {

        // get value from localStorage getItem() 
        var text = $(this).siblings(".description").val();
        var date = $(this).parent().attr("id");

        localStorage.setItem(date, text);

    });
    // getting values from the local storage to save the user inputs when refreshed.
    $("#hour_9 .description").val(localStorage.getItem("hour_9"));
    $("#hour_10 .description").val(localStorage.getItem("hour_10"));
    $("#hour_11 .description").val(localStorage.getItem("hour_11"));
    $("#hour_12 .description").val(localStorage.getItem("hour_12"));
    $("#hour_1 .description").val(localStorage.getItem("hour_1"));
    $("#hour_2 .description").val(localStorage.getItem("hour_2"));
    $("#hour_3 .description").val(localStorage.getItem("hour_3"));
    $("#hour_4 .description").val(localStorage.getItem("hour_4"));
    $("#hour_5 .description").val(localStorage.getItem("hour_5"));
    $("#hour_6 .description").val(localStorage.getItem("hour_6"));
    $("#hour_7 .description").val(localStorage.getItem("hour_7"));
    $("#hour_8 .description").val(localStorage.getItem("hour_8"));
});

// This function changes color according to the time of the day, green is assigned to the future, red is present and grey is past.
function backgroundColor() {

    if (currentHour > 9) {
        $("#hour_9").addClass("past");
    } else if (currentHour >= 9 && currentHour < 10) {
        $("#hour_9").addClass("present");
    } else if (currentHour < 9) {
        $("#hour_9").addClass("future");
    }
    if (currentHour > 10) {
        $("#hour_10").addClass("past");
    } else if (currentHour >= 10 && currentHour < 11) {
        $("#hour_10").addClass("present");
    } else if (currentHour < 10) {
        $("#hour_10").addClass("future");
    }
    if (currentHour > 11) {
        $("#hour_11").addClass("past");
    } else if (currentHour >= 11 && currentHour < 12) {
        $("#hour_11").addClass("present");
    } else if (currentHour < 11) {
        $("#hour_11").addClass("future");
    }
    if (currentHour > 12) {
        $("#hour_12").addClass("past");
    } else if (currentHour >= 12 && currentHour < 13) {
        $("#hour_12").addClass("present");
    } else if (currentHour < 12) {
        $("#hour_12").addClass("future");
    }
    if (currentHour > 13) {
        $("#hour_1").addClass("past");
    } else if (currentHour >= 13 && currentHour < 14) {
        $("#hour_1").addClass("present");
    } else if (currentHour < 13) {
        $("#hour_1").addClass("future");
    }
    if (currentHour > 14) {
        $("#hour_2").addClass("past");
    } else if (currentHour >= 14 && currentHour < 15) {
        $("#hour_2").addClass("present");
    } else if (currentHour < 14) {
        $("#hour_2").addClass("future");
    }
    if (currentHour > 15) {
        $("#hour_3").addClass("past");
    } else if (currentHour >= 15 && currentHour < 16) {
        $("#hour_3").addClass("present");
    } else if (currentHour < 16) {
        $("#hour_3").addClass("future");
    }
    if (currentHour > 16) {
        $("#hour_4").addClass("past");
    } else if (currentHour >= 16 && currentHour < 17) {
        $("#hour_4").addClass("present");
    } else if (currentHour < 17) {
        $("#hour_4").addClass("future");
    }
    if (currentHour > 17) {
        $("#hour_5").addClass("past");
    } else if (currentHour >= 17 && currentHour < 18) {
        $("#hour_5").addClass("present");
    } else if (currentHour < 18) {
        $("#hour_5").addClass("future");
    }
    if (currentHour > 18) {
        $("#hour_6").addClass("past");
    } else if (currentHour >= 18 && currentHour < 19) {
        $("#hour_6").addClass("present");
    } else if (currentHour < 19) {
        $("#hour_6").addClass("future");
    }
    if (currentHour > 19) {
        $("#hour_7").addClass("past");
    } else if (currentHour >= 19 && currentHour < 20) {
        $("#hour_7").addClass("present");
    } else if (currentHour < 20) {
        $("#hour_7").addClass("future");
    }
    if (currentHour > 20) {
        $("#hour_8").addClass("past");
    } else if (currentHour >= 20 && currentHour < 21) {
        $("#hour_8").addClass("present");
    } else if (currentHour < 21) {
        $("#hour_8").addClass("future");
    }
}