function displayDate() {
    const currentDate = moment().format('dddd, MMMM, YYYY')
    const currentDateEl = $("#currentDay");
    currentDateEl.text(currentDate)
}

$(document).ready(function () {
    displayDate()
})

//Show the timeblocks for a standard workday
let workHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

//For loop to do this action repeatedly



let inputId = document.getElementsByClassName("userInput");
let length = inputId.length;
for (i = 0; i < length; i++) {
    inputId[i].id = "inputField" + (i + 1);

}
;
