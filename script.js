const form = document.querySelector("form");
const container = document.querySelector(".container");
const cardSuccess = document.querySelector(".card-success");
const dismissBtn = document.querySelector(".button-dismiss");
const emailInput = document.getElementById("email");

function switchSections() {
  container.classList.add("hidden");
  cardSuccess.classList.remove("hidden");
}

function isValidEntry(email) {
  const reg = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}", "i");
  return reg.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const errorMsg = document.querySelector(".error-message");
  const displayMsg = document.querySelector(".message");
  if (email === "") {
    errorMsg.classList.remove("hidden");
    displayMsg.textContent = "Please enter valid email";
  } else if (!isValidEntry(email)) {
    errorMsg.classList.remove("hidden");
    displayMsg.textContent = "Valid email required";
  } else {
    switchSections();
  }
});

dismissBtn.addEventListener("click", () => {
  switchSections();
});
