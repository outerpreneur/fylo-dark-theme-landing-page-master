const emailInput = document.getElementById("email");
const email = emailInput.value;
const formButton = document.querySelector(".submit-form");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression pattern for email validation

  // Check if the email matches the pattern
  return emailPattern.test(email);
}

formButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (validateEmail(email)) {
    // email is valid
    console.log("email is valid");
  } else {
    // email is invalid
    console.log("Email is invalid");
  }
});
