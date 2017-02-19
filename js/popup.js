var writeusOpen = document.querySelector(".contacts-btn");
var writeusForm = document.querySelector(".modal-writeus");
var writeusClose = writeusForm.querySelector(".modal-writeus-close");

writeusOpen.addEventListener("click", function (event) {
  event.preventDefault();
  writeusForm.classList.add("modal-writeus-show");
  var form = lesson.querySelector("form");
  var customer = lesson.querySelector("[name=customer]");
  var mail = lesson.querySelector("[name=mail]");
  var message = lesson.querySelector("[name=message]");
  customer.focus();
});

writeusClose.addEventListener("click", function (event) {
  event.preventDefault();
  writeusForm.classList.remove("modal-writeus-show");
  writeusForm.classList.remove("modal-error");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (writeusForm.classList.contains("modal-writeus-show")) {
      writeusForm.classList.remove("modal-writeus-show");
      writeusForm.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (event) {
  if (!customer.value || !mail.value || !message.value) {
    event.preventDefault();
    writeusForm.classList.add("modal-error");
  } else {
    localStorage.setItem("customer", customer.value);
    localStorage.setItem("mail", mail.value);
  }
});
