var emailInput = document.getElementById("email");
var emailValue = emailInput.value;
var form = document.getElementById("main-form");
var formButton = document.querySelector(".submit-form");

function validateEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  return emailPattern.test(email);
}

form.addEventListener("submit", (event) => {
  // prevent default behaviour
  console.log(emailInput);
  console.log(emailValue);
  if (validateEmail(email)) {
    // email is valid
    alert("email is valid");
  } else {
    // email is invalid
    alert("Email is invalid");
  }
  event.preventDefault();
});
