document.addEventListener("DOMContentLoaded", function () {

  // dynamic footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // smooth scroll button
  window.scrollToSection = function (id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // contact form submit
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form && message) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      message.classList.remove("hidden");
      message.textContent = "Message Sent Successfully ✔";
    });
  }

});
