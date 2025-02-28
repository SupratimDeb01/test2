document.querySelectorAll('nav a, .footer a, .popup-navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// -------------------------Floating Navbar Functionality-----------------------------



// Get elements
const hamburger = document.getElementById('hamburger-icon');
const floatingnavbar = document.getElementById('floating-navbar');
const popupNavbar = document.getElementById('popup-navbar');
const cancel = document.getElementById('cancel');

// Toggle popup navbar
hamburger.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    popupNavbar.style.display="flex";
    floatingnavbar.style.display="none";
});

// Close popup navbar
cancel.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    popupNavbar.style.display="none";
    floatingnavbar.style.display="flex";
});