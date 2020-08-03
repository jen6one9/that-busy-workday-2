function displayDate() {
    const currentDate = moment().format('dddd, MMMM DD, YYYY')
    const currentDateEl = $("#currentDay");
    currentDateEl.text(currentDate)
    console.log("currentDate",currentDate)
}

$(document).ready(function () {
    displayDate()
    var currentHour = moment().hour();
    console.log(currentHour);
    $(".saveBtn").on("click",function(event) {
        event.preventDefault();
        let inputField = $(this).siblings("input").val()
        let hourblock = $(this).siblings("input").attr("id")
        console.log(inputField, hourblock)
        localStorage.setItem(hourblock,inputField)
        
    })   
    //loop through the time blocks and obtain the values from local storage and display on HTML page. 
    for (let i=8; i <= 17; i++){
        $("#"+i).val(localStorage.getItem(i))
        if (i < currentHour){
            $("#"+i).addClass("bg-warning")
        }
        else if (i == currentHour){
            $("#"+i).addClass("bg-success")
        }
        else {
            $("#"+i).addClass("bg-info")
        }
    }
})

//Here are the timeblocks for a standard workday
let timeblocks = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]



//Iam trying to capture user input using a for loop
// let inputId = document.getElementsByClassName("userInput");
// console.log("userInput")


// let length = inputId.length;
// let i = 0;


// for (i = 0; i < length; i++) {
//     inputId[i].id = "inputField" + (i + 1);
   

// }
// ;

 

//save button icon and functionality
function addToSaveBtn() {
    let saveBtn = document.getElementsByClassName("saveBtn");
    let length = saveBtn.length;
    for (i = 0; i < length; i++) {

        saveBtn[i].id = "saveBtn" + (i + 1);
    }
}

