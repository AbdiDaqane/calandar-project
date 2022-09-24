var timeDisplay = $('#currentDay');
var textBox = $(".description");
//store current daate
var date = new Date();
var currentHour = date.getHours();

//display date in below format
timeDisplay.text(moment().format('dddd MMMM Do YYYY'));

var timeBlock = $('#time-block');

$(document).ready(function () {
    //start for loop for 9 iterations
    for (let i = 0; i < 9; i++) {
        //store tags in variables
        var timediv = $('<div>')
        var time = $('<div>')
        var textArea = $('<textarea>')
        var saveBtn = $('<button>')
        var t;

        //add text to save button
        saveBtn.text('Save')
        //add row class to time div
        timediv.addClass('row')
        //check if time is 12pm
        if (i + 9 === 12) {
            t = i + 9;
            time.text(t + "pm")
        } 
        //check if time is past 12pm
        else if (i + 9 > 12) {
            t = i - 3;
            time.text(t + "pm")
            //add 12 to make it military time since
            //date() returns in militaary time
            t += 12;
        } 
        //check if time is before 12 pm
        else {
            t = i + 9;
            time.text(t + "am")
        }

        //check if current hour and row how is equavalent
        if (currentHour === t) {
            //add present class to text area
            textArea.addClass('present');
        }
        //check if curent time is greater than row time
        else if (currentHour > t) {
            //add past class to text area
            textArea.addClass('past');
        } 
        //check if current time is less than row time
        else {
            //add future class to text area
            textArea.addClass('future');
        }

        //grabbing local storage with key being time
        var text = localStorage.getItem(t.toString()+"am");
        //check if local storage has value
        if (text != null) {
            textArea.text(text);
        }

        //add classes to time, textarea and sveBtn
        time.addClass('col-md-1')
        time.addClass('hour')
        textArea.addClass('col-md-10')
        textArea.addClass("description")
        saveBtn.addClass('col-md-1')
        saveBtn.addClass('saveBtn')
        //append tags to parent divs
        timediv.append(time, textArea, saveBtn)
        timeBlock.append(timediv)

        //add click event listener to save button
        saveBtn.click(function () {
            //store value of text area
            var txt = $(this).siblings(".description").val()
            //store row hour
            var hour = $(this).siblings(".hour").text()
            //save local storage with key being row hour
            localStorage.setItem(hour, txt)
        })

    }
})




