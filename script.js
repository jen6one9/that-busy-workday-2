//function to display date using momentjs
function displayDate() {
    const currentDate = moment().format('dddd, MMMM DD, YYYY')
    const currentDateEl = $("#currentDay");
    currentDateEl.text(currentDate)
    console.log("currentDate", currentDate)
}
//function to take user input and save to local storage
$(document).ready(function () {
    displayDate()
    var currentHour = moment().hour();
    console.log(currentHour);
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        let inputField = $(this).siblings("input").val()
        let hourblock = $(this).siblings("input").attr("id")
        console.log(inputField, hourblock)
        localStorage.setItem(hourblock, inputField)

    })
    document.getElementById("inputField").placeholder = "Input Details";
    //loop through the time blocks and obtain the values from local storage and display on HTML page. Use bootstrap to change color of the time blocks depending on the past, present and future.
    for (let i = 8; i <= 17; i++) {
        $("#" + i).val(localStorage.getItem(i))
        if (i < currentHour) {
            $("#" + i).addClass("bg-secondary")
        }
        else if (i == currentHour) {
            $("#" + i).addClass("bg-info")
        }
        else {
            $("#" + i).addClass("bg-dark")
        }
    }
})

