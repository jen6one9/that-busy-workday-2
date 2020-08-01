function myCalendar() {
    $(document).ready(function () {
        let momentVar = moment().format('dddd, MMMM DD, YYYY');
        let workHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
//Display the current day at the top of the UI
function currentDay(){
    let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
}
