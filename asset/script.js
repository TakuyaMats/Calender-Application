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

    function backgroundColor () {
    
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
    
            if (blockHour < currentHour) {
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            } else if (blockHour === currentHour) {
                $(this).addClass('present');
                $(this).removeClass('past');
                $(this).removeClass('future');
            } else {
                $(this).addClass('future');
                $(this).removeClass('past');
                $(this).removeClass('present');
            }
        })
    }

    // stores the users text content for each time block when they press the save button
    $('.saveBtn').on('click', function () {
        // it is overwriting the value each time the save button is clicked
        localStorage.userInput = $('textarea[name="user-input"]').val();
    });
    backgroundColor ()
});

// make a function where the scheduler recognizes the current time
// assign the css color background to each column according to the current time



// Array.from(hourBlocks).forEach(row => {
//     let rowIdString = row.id,
//     rowHour;

//     if (rowIdString) {
//         rowHour = parseInt(rowIdString);
//     }
//     if (rowHour) {
//         if (currentHour === rowHour) {
//             addClass('present');
//         } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//             addClass('past');
//         } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//             addClass('future');
//         }
//     }
// })

// function backgroundColor () {

//     if (currentHour) {
//         $('.time-block').addClass('present');
//     } else if ((currentHour < sixAM) && (currentHour > sixAM + 6)) {
//         $('.time-block').addClass('future');
//     } else if ((currentHour > sixAM) && (currentHour < sixAM - 6)) {
//         $('.time-block').addClass('past');
//     }
// };
