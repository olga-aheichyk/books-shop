const MAX_GIFTS_COUNT = 2;

const deliveryDateInput = document.querySelector("#delivery_date");
const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);

deliveryDateInput.min = tomorrowDate.toISOString().split("T")[0];

const handleChangeFormInputsValidity = () => {
  const invalidInputs = [...form.querySelectorAll("input:invalid")];
  const validInputs = [...form.querySelectorAll("input:valid")];

  invalidInputs.forEach((input) => {
    input.style.border = "1px solid red";
  });

  validInputs.forEach((input) => {
    input.style.border = "1px solid grey";
  });

  if (!invalidInputs.length) {
    submitButton.disabled = false;
  }
};

const form = document.querySelector(".delivery__form");
const submitButton = document.querySelector(".delivery__form-submit");
form.addEventListener("change", handleChangeFormInputsValidity);


const disableGiftCheckboxesAtMaxCount = () => {
  const checkedGiftCheckboxes = [
    ...document.querySelectorAll(".input__checkbox:checked"),
  ];
  const uncheckedGiftCheckboxes = [
    ...document.querySelectorAll(".input__checkbox:not(:checked)"),
  ];

  if (checkedGiftCheckboxes.length >= MAX_GIFTS_COUNT) {
    uncheckedGiftCheckboxes.forEach((option) => {
      option.disabled = true;
    });
  } else {
    uncheckedGiftCheckboxes.forEach((option) => {
      option.disabled = false;
    });
  }
};

const giftFieldset = document.querySelector(".gift");
giftFieldset.addEventListener("input", disableGiftCheckboxesAtMaxCount);


const getData = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  const data = Object.fromEntries(formData);

  console.log(data)

  const street = data.street;
  const house = data.street_number;
  const flat = data.flat_number;
  const name = data.name;
  const surname = data.surname;

  const deliveryInfo = document.createElement("p");
  deliveryInfo.classList.add('delivery__message');

  deliveryInfo.innerText = `The order created. The delivery address is ${street} street house ${house} flat ${flat}. Customer ${name} ${surname}.`;

  form.textContent = "";
  form.appendChild(deliveryInfo);
};

form.addEventListener('submit', getData);