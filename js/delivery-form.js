//const submitButton = document.querySelector(".delivery__form-submit");
const form = document.querySelector(".delivery__form");

form.addEventListener("input", () => {
  const invalidInputs = Array.from(form.querySelectorAll("input:invalid"));
  const validInputs = Array.from(form.querySelectorAll("input:valid"));

  invalidInputs.forEach((input) => {
    input.style.border = "1px solid red";
  });

  validInputs.forEach((input) => {
    input.style.border = "1px solid grey";
  });
});