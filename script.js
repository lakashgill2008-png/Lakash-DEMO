javascript
// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the user's name
    const name = document.getElementById("name").value;

    // Display a message
    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    // Clear the form
    contactForm.reset();
});


// =========================================
// AUTOMATIC COPYRIGHT YEAR
// =========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

