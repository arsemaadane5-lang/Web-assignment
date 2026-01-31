document.addEventListener("DOMContentLoaded", function () {


  const welcomeBox = document.getElementById("welcomeMessage");
  if (welcomeBox) {
    welcomeBox.textContent = "Welcome to Tibeb n’ T’ej ✨ We’re glad you’re here!";
  }

  const imageText = document.getElementById("imageText");

  document.querySelectorAll(".images img").forEach(img => {
    img.addEventListener("mouseenter", () => {
      imageText.textContent = "Creativity and community in every session ✨";
    });

    img.addEventListener("mouseleave", () => {
      imageText.textContent =
        "Our happy participants from our last Tibeb n’ T’ej event";
    });
  });


  const registerForm = document.getElementById("registerForm");
  const priceDisplay = document.getElementById("priceDisplay");
  const messageBox = document.getElementById("messageBox");

  document.querySelectorAll('input[name="session"]').forEach(radio => {
    radio.addEventListener("change", () => {
      priceDisplay.innerHTML =
        "<strong>Price:</strong> " + radio.value + " Birr";
    });
  });

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const count = document.getElementById("count").value;
      const session = document.querySelector(
        'input[name="session"]:checked'
      );

      if (name === "" || email === "" || count === "" || !session) {
        messageBox.textContent =
          "Please fill in all required fields before submitting.";
        messageBox.style.color = "red";
        return;
      }

      messageBox.textContent =
        "Registration successful! We will contact you soon.";
      messageBox.style.color = "green";

      registerForm.reset();
      priceDisplay.innerHTML = "<strong>Price:</strong> --";
    });
  }


  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  const messageInput = document.getElementById("contactMessageInput");
  const charCount = document.getElementById("charCount");

  const copyBtn = document.getElementById("copyEmailBtn");
  const emailText = document.getElementById("emailText");

  if (messageInput) {
    messageInput.addEventListener("input", () => {
      charCount.textContent =
        messageInput.value.length + " / 200 characters";
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const message = messageInput.value.trim();

      if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
      }

      if (message.length > 200) {
        formMessage.textContent =
          "Message must be under 200 characters.";
        formMessage.style.color = "red";
        return;
      }

      formMessage.textContent =
        "Message sent successfully! We’ll get back to you soon 😊";
      formMessage.style.color = "green";

      contactForm.reset();
      charCount.textContent = "0 / 200 characters";

      setTimeout(() => {
        formMessage.textContent = "";
      }, 4000);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(emailText.textContent);
      formMessage.textContent = "Email copied to clipboard ✔";
      formMessage.style.color = "green";

      setTimeout(() => {
        formMessage.textContent = "";
      }, 3000);
    });
  }
  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

});
