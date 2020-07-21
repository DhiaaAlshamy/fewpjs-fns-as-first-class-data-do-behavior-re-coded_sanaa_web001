/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  return (timeString.parseInt(timeString,10)<12)?"Good Morning":
   (timeString.parseInt(timeString,10)>12 && timeString.parseInt(timeString,10)<17 )?
   "Good Afternoon":"Good Evening";
}
/* Write your implementation of displayMessage() */
function displayMessage(greet){
  
}
