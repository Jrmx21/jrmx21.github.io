// Get a reference to the button
var myButton = document.getElementById("myButton");

// Add a click event to the button that calls the function
myButton.addEventListener("click", runScript);

function runScript() {
  var a = prompt("Enter the first number");
  var b = prompt("Enter the second number");
  alert(
    "The entered numbers are " + a + " and " + b + ". Please check the console."
  );
  var exit = false;
  while (!exit) {
    console.log("CALCULATOR");
    console.log("Press 1 to add");
    console.log("Press 2 to subtract");
    console.log("Press 3 to multiply");
    console.log("Press 4 to divide");
    console.log("Press 5 to get the remainder");
    console.log("Press 6 to exit");
    
    var res = parseInt(prompt("Enter your choice:"));

    switch (res) {
      case 1:
        console.log(parseInt(a) + parseInt(b));
        break;
      case 2:
        console.log(parseInt(a) - parseInt(b));
        break;
      case 3:
        console.log(parseInt(a) * parseInt(b));
        break;
      case 4:
        console.log(parseInt(a) / parseInt(b));
        break;
      case 5:
        console.log(parseInt(a) % parseInt(b));
        break;
      case 6:
        exit = true;
        console.log("BYE BYE!!!")
        break;

      default:
        console.log("Invalid choice");
    }
  }
}
