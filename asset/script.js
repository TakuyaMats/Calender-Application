// shows the current date for the header
var headingDate = moment().format("MMMM, Do YYYY");
$("#currentDay").text(headingDate);

// the current date and time.
var now = moment();
// the current time in hour.
var currentHour = now.hours()

// getting all textarea elements
var textAreaElement = jQuery("textarea").find("> textarea");

// assign multiple id's "the hour blocks"
var hourBlocks = $('.time-block')

// make sure the text stays on the page even after they refresh
// user is able to delete the text and save it. clear function.
// clearing the message block of text on click, exercise 9

$(document).ready(function () {

    backgroundColor();

    // stores the users text content for each time block when they press the save button
    $('.saveBtn').on('click', function () {
        // it is overwriting the value each time the save button is clicked
        localStorage.userInput = $('textarea[name="user-input"]').val();
    });
});

// make a function where the scheduler recognizes the current time
function backgroundColor () {

    if (currentHour) {
        $('.time-block').addClass('.present');
    } else if (hourBlocks > currentHour) {
        $('.time-block').addClass('.future');
    } else if (hourBlocks < currentHour) {
        $('.time-block' > now).addClass('.past');
    }
};


// assign the css color background to each column according to the current time
