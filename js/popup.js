var writeusOpen = document.querySelector(".contacts-btn");
var writeusForm = document.querySelector(".modal-writeus");
var writeusClose = writeusForm.querySelector(".modal-writeus-close");
var storageCustomer = localStorage.getItem("customer");
var customer = writeusForm.querySelector("[name=customer]");
var mail = writeusForm.querySelector("[name=mail]");
var message = writeusForm.querySelector("[name=message]");
var storageMail = localStorage.getItem("mail");
var form = writeusForm.querySelector("form");

writeusOpen.addEventListener("click", function (event) {
  event.preventDefault();
  writeusForm.classList.add("modal-writeus-show");
  customer.focus();
  if (storageCustomer) {
    customer.value = storageCustomer;
    mail.focus();
  }
  if (storageMail) {
    mail.value = storageMail;
    message.focus();
  }
});

writeusClose.addEventListener("click", function (event) {
  event.preventDefault();
  if (customer.value) {
    localStorage.setItem("customer", customer.value);
  }
  if (mail.value) {
    localStorage.setItem("mail", mail.value)
  }
  writeusForm.classList.remove("modal-writeus-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (writeusForm.classList.contains("modal-writeus-show")) {
      if (customer.value) {
        localStorage.setItem("customer", customer.value);
      }
      if (mail.value) {
        localStorage.setItem("mail", mail.value)
      }
      writeusForm.classList.remove("modal-writeus-show");
    }
  }
});

form.addEventListener("submit", function (event) {
  if (customer.value) {
    localStorage.setItem("customer", customer.value);
  }
  if (mail.value) {
    localStorage.setItem("mail", mail.value)
  }
});
