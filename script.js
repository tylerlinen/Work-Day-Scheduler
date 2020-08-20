const currentDay = document.getElementById("#currentDay");
const timeSlot = document.getElementById("#timeSlot");
const eventList = document.getElementById("#eventList");
const save = document.getElementById("#Save");
const timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');


  
$(document).ready(function() {

//Time In Header
$("#currentDay").prepend(timeNow);


//Setting on click function

$("#Save").on("click", function (event) {
    event.preventDefault(event)
    var value = $(this).siblings("#eventList").val() // We are grabbing the <input> element closest to the Save button we clicked!
    var time = $(this).parent().attr("#id");
    localStorage.setItem(time, value);

});

//getting the hours 

function hours() {
    var hour = moment().hours();
    $(".hour").each(function () {
        var ourHour = parseInt($(this).attr("id").split("-")[1]);

        if (ourHour < hour) {
            $(this).addClass("past");
        }

        else if (ourHour === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

hours();

var update = setInterval(hours, 15000);



$("#12am .description").val(localStorage.getItem("12am"));
  $("#1am.description").val(localStorage.getItem("1am"));
  $("#2am.description").val(localStorage.getItem("2am"));
  $("#3am .description").val(localStorage.getItem("3am"));
  $("#4am .description").val(localStorage.getItem("4am"));
  $("#5am .description").val(localStorage.getItem("5am"));
  $("#6am .description").val(localStorage.getItem("6am"));
  $("#7am.description").val(localStorage.getItem("7am"));
  $("#8am .description").val(localStorage.getItem("8am"));
  $("#9am.description").val(localStorage.getItem("9am"));
  $("#10am.description").val(localStorage.getItem("10am"));
  $("#11am.description").val(localStorage.getItem("11am"));
  $("#12pm.description").val(localStorage.getItem("12pm"));
  $("#1pm.description").val(localStorage.getItem("1pm"));
  $("#2pm.description").val(localStorage.getItem("2pm"));
  $("#3pm.description").val(localStorage.getItem("3pm"));
  $("#4pm.description").val(localStorage.getItem("4pm"));
  $("#5pm .description").val(localStorage.getItem("5pm"));
  $("#6pm.description").val(localStorage.getItem("6pm"));
  $("#7pm.description").val(localStorage.getItem("7pm"));
  $("#8pm.description").val(localStorage.getItem("8pm"));
  $("#9pm.description").val(localStorage.getItem("9pm"));
  $("#10pm.description").val(localStorage.getItem("10pm"));
  $("#11pm.description").val(localStorage.getItem("11pm"));
 
});