const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const service = contactForm.querySelector("select").value;
  const message = contactForm.querySelector("textarea").value.trim();
  let formMessage = document.querySelector(".form-message");

  if (!formMessage) {
    formMessage = document.createElement("p");
    formMessage.className = "form-message";
    contactForm.appendChild(formMessage);
  }

  if (!name || !email || !service || !message) {
    formMessage.textContent = "Completa todos los campos para enviar tu mensaje.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.textContent = "Mensaje enviado correctamente. Te responderemos pronto.";
  formMessage.classList.remove("error");
  contactForm.reset();
});
