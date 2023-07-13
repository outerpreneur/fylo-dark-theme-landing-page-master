const emailInput = document.getElementById("email");
const emailValue = emailInput.value;
const form = document.getElementById("main-form");
const formButton = document.querySelector(".submit-form");
const alertMsg = document.querySelector(".alert-msg");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailInput.value);
}

form.addEventListener("submit", (event) => {
  console.log(emailInput.value);
  if (validateEmail(emailInput.value)) {
    // alert("email is valid");
    alertMsg.style.display = "block";
    alertMsg.style.color = "green";
    alertMsg.textContent = "Thank You for Suscribing";
  } else {
    // alert("Email is invalid");
    alertMsg.style.display = "block";
    alertMsg.style.color = "red";
    alertMsg.textContent = "Please enter a valid email address";
  }
  event.preventDefault();
});
