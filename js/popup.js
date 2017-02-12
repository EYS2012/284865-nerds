      var writeusOpen = document.querySelector(".contacts-btn");
      var writeusForm = document.querySelector(".modal-writeus");
      var writeusClose = writeusForm.querySelector(".modal-writeus-close");

      writeusOpen.addEventListener("click", function (event) {
        event.preventDefault();
        writeusForm.classList.add("modal-writeus-show");
      });

      writeusClose.addEventListener("click", function (event) {
        event.preventDefault();
        writeusForm.classList.remove("modal-writeus-show");
      });

      window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          if (writeusForm.classList.contains("modal-writeus-show")) {
            writeusForm.classList.remove("modal-writeus-show");
          }
        }
      });
