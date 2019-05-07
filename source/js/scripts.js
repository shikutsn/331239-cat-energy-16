var selectionForm = document.querySelector(".selection-form");
var submitButton = selectionForm.querySelector(".selection-form__submit-button");
var nameField = selectionForm.querySelector(".selection-form__input--name");
var weightField = selectionForm.querySelector(".selection-form__input--weight");
var emailField = selectionForm.querySelector(".selection-form__input--email");
var phoneField = selectionForm.querySelector(".selection-form__input--phone");

function formInit () {
  nameField.focus();
}

selectionForm.addEventListener("submit", function (evt) {
  if (!nameField.value || !weightField.value || !emailField.value || !phoneField.value) {
    evt.preventDefault();
    // навешиваем класс с ошибкой на поле (подкрашивание красным)
    // поля, начиная с последнего, чтобы фокус остался на первом
    // поле с ошибкой
    if (!phoneField.value) {
      phoneField.classList.add("selection-form__input--error");
      // phoneField.focus();
    }
    if (!emailField.value) {
      emailField.classList.add("selection-form__input--error");
      // emailField.focus();
    }
    if (!weightField.value) {
      weightField.classList.add("selection-form__input--error");
      // weightField.focus();
    }
    if (!nameField.value) {
      nameField.classList.add("selection-form__input--error");
      // nameField.focus();
    }
  }
});

// если значение в поле поменялось и было подсвечено красным - убираем
nameField.addEventListener("input", function (evt) {
  if (nameField.classList.contains("selection-form__input--error")) {
    nameField.classList.remove("selection-form__input--error");
  }
});

weightField.addEventListener("input", function (evt) {
  if (weightField.classList.contains("selection-form__input--error")) {
    weightField.classList.remove("selection-form__input--error");
  }
});

emailField.addEventListener("input", function (evt) {
  if (emailField.classList.contains("selection-form__input--error")) {
    emailField.classList.remove("selection-form__input--error");
  }
});

phoneField.addEventListener("input", function (evt) {
  if (phoneField.classList.contains("selection-form__input--error")) {
    phoneField.classList.remove("selection-form__input--error");
  }
});


