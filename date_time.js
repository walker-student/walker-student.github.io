/* 
jQuery and Java 

The strucuture is: $(selector).action()
*/

/* Make the clock live */
runClock();
setInterval("runClock()", 1000);

/* Function to create the live clock */

function runClock() {


/* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */
    document.getElementById("dateTimeToday").innerHTML = "Date: " + dateStr + "<br/>" + "Time: " + timeStr;

}