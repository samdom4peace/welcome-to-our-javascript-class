/* 
    When the user clicks the button, the user expects something to happen (an event to occur)
    This is known as a click event
    The event listener is the button 
    The ID of the button in the HTML is "welcome" and the type is "submit"
*/
document.getElementById("welcome").addEventListener("submit", welcome);
function welcome(event) {
    event.preventDefault();

    // Get the first name entered by the user
    // The ID of the first name in the HTML is firstName 
    // Declare a variable for that first name. You may use the name of the variable as the same name of the ID
    var firstName = document.getElementById("firstName").value;

    // Display the welcome message
     // The welcome message should include the first name entered by the user
    document.getElementById("welcomeMessage").innerHTML = "Welcome to our Class, " + firstName;
}

// Clear/Erase the welcome message
// We used "erase" rather than "clear" or "reset" as the ID of the Reset button 
// This is because there is a set.clear() method in JavaScript. Avoid conflict with names
function erase(){
    document.getElementById("firstName").value = "";
    document.getElementById("welcomeMessage").innerHTML = "";
}