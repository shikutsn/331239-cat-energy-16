var submitButton = document.querySelector(".selection-form__submit-button");

// var writeusWindow = document.querySelector(".modal-writeus");
// var writeusClose = writeusWindow.querySelector(".modal-close");

var selectionForm = document.querySelector(".selection-form");
var nameField = selectionForm.querySelector(".selection-form__input--name");
var weightField = selectionForm.querySelector(".selection-form__input--weight");
var emailField = selectionForm.querySelector(".selection-form__input--email");
var phoneField = selectionForm.querySelector(".selection-form__input--phone");

// var isStorageSupported = true;
// var storagedName = "";
// var storagedEmail = "";

// try {
//   storagedName = localStorage.getItem("name");
//   storagedEmail = localStorage.getItem("email");
// } catch (err) {
//   isStorageSupported = false;
// }

function formInit () {
  nameField.focus();
}

// writeusButton.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   writeusWindow.classList.add("modal-show");

//   if (storagedName) {
//     nameField.value = storagedName;
//   }
//   if (storagedEmail) {
//     emailField.value = storagedEmail;
//   }

//   if (storagedName && storagedEmail) {
//     letterField.focus();
//   } else if (storagedName) {
//     emailField.focus();
//   } else {
//     nameField.focus();
//   }
// });

selectionForm.addEventListener("submit", function (evt) {
  if (!nameField.value || !weightField.value || !emailField.value || !phoneField.value) {
    evt.preventDefault();
    // writeusWindow.classList.remove("modal-error");
    // void writeusWindow.offsetWidth;
    // writeusWindow.classList.add("modal-error");
    //навешиваем класс с ошибкой на поле (подкрашивание красным)
    if (!nameField.value) {
      nameField.classList.add("modal-invalid-field");
    }
    if (!weightField.value) {
      weightField.classList.add("modal-invalid-field");
    }
    if (!emailField.value) {
      emailField.classList.add("modal-invalid-field");
    }
    if (!phoneField.value) {
      phoneField.classList.add("modal-invalid-field");
    }
  }
});

// если значение в поле поменялось и было подсвечено красным - убираем
nameField.addEventListener("input", function (evt) {
  if (nameField.classList.contains("modal-invalid-field")) {
    nameField.classList.remove("modal-invalid-field");
  }
});

emailField.addEventListener("input", function (evt) {
  if (emailField.classList.contains("modal-invalid-field")) {
    emailField.classList.remove("modal-invalid-field");
  }
});

letterField.addEventListener("input", function (evt) {
  if (letterField.classList.contains("modal-invalid-field")) {
    letterField.classList.remove("modal-invalid-field");
  }
});

function closeModalWindow() {
  if (writeusWindow.classList.contains("modal-show")) {
    writeusWindow.classList.remove("modal-show");
    writeusWindow.classList.remove("modal-error");
  }
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModalWindow();
  }
});

writeusClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  closeModalWindow();
});
