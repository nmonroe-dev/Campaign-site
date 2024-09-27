// Get all issue cards and modals
var issueCards = document.querySelectorAll(".issue-card");
var modals = document.querySelectorAll(".modal");
var closeButtons = document.querySelectorAll(".close");

// Function to close all modals
function closeAllModals() {
    modals.forEach(function(modal) {
        modal.style.display = "none";
    });
}

// Add click event listeners to all issue cards
issueCards.forEach(function(card) {
    card.addEventListener('click', function() {
        var modalId = card.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        closeAllModals();
        modal.style.display = "flex"; // Display the correct modal
    });
});

// Add event listener to close buttons
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        closeAllModals();
    });
});

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeAllModals();
    }
};

// Hamburger Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
