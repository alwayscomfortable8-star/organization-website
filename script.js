// Automatically display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuToggle.textContent = "✕";
            menuToggle.setAttribute("aria-label", "Close navigation");
        } else {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });
}


// Contact form demonstration
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        formMessage.textContent =
            "Thank you, " + name + "! Your demonstration message has been received.";

        contactForm.reset();
    });
}