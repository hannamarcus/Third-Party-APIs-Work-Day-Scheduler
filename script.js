// Date from moment for top of page
var today = moment();
$("#currentDay").text(today.format('dddd, MMM Do, YYYY'));

// Current time 
function timeTracker() {
    var timeNow = moment().hour()

    // Click event listener for save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".input").val();
        var time = $(this).parent().attr("id");

        // Saving added text in local storage
        localStorage.setItem(time, text);
    })

    // Loop over time-blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("timeAt")[1]);

        // Background colors for timeblocks
        var tableTime = parseInt($(this).attr("id"));
        var hour = moment().hours();

        if (timeNow == hour) {
            $(this).addClass("present");
        } else if (timeNow > hour) {
            $(this).addClass("future");
        } else if (timeNow < hour) {
            $(this).addClass("past");
        }
    })
}

// Display Added Text from Local Storage
$("#timeAt9 .input").val(localStorage.getItem("timeAt9"));
$("#timeAt10 .input").val(localStorage.getItem("timeAt10"));
$("#timeAt11 .input").val(localStorage.getItem("timeAt11"));
$("#timeAt12 .input").val(localStorage.getItem("timeAt12"));
$("#timeAt13 .input").val(localStorage.getItem("timeAt13"));
$("#timeAt14 .input").val(localStorage.getItem("timeAt14"));
$("#timeAt15 .input").val(localStorage.getItem("timeAt15"));
$("#timeAt16 .input").val(localStorage.getItem("timeAt16"));
$("#timeAt17 .input").val(localStorage.getItem("timeAt17"));
$("#timeAt18 .input").val(localStorage.getItem("timeAt18"));
$("#timeAt19 .input").val(localStorage.getItem("timeAt19"));

timeTracker();





