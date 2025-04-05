// Theme Toggle Script
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Switch to light theme');
    } else {
        body.classList.remove('dark-theme');
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    }
}

// Determine initial theme: 1. LocalStorage, 2. System Pref, 3. Default (Dark)
let initialTheme = localStorage.getItem('theme');
if (!initialTheme) {
    if (prefersDarkScheme.matches) {
        initialTheme = 'dark';
    } else {
        initialTheme = 'dark'; // Default to dark if no system pref or system is light
    }
}

// Apply the determined theme on initial load
if (themeToggle && body) { // Ensure elements exist before applying
    applyTheme(initialTheme);

    // Listener for the toggle button
    themeToggle.addEventListener('click', () => {
        let newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// --- Mobile Navigation Toggle --- //
const hamburgerButton = document.getElementById('hamburger-button');
const mainNav = document.getElementById('main-nav');

if (hamburgerButton && mainNav) {
    hamburgerButton.addEventListener('click', () => {
        mainNav.classList.toggle('mobile-nav-active');
        // Optional: Toggle ARIA attribute for accessibility
        const isExpanded = mainNav.classList.contains('mobile-nav-active');
        hamburgerButton.setAttribute('aria-expanded', isExpanded);
    });
}

// Email Obfuscation Script
document.addEventListener("DOMContentLoaded", function() {
    var emailElement = document.getElementById("email");
    if (emailElement) { // Check if element exists
        var emailText = emailElement.textContent;
        // Ensure we don't try to replace if it's already an anchor
        if (emailText.includes(" [at] ")) {
            var emailAddress = emailText.replace(" [at] ", "@").replace(" [dot] ", ".");
            emailElement.innerHTML = '<a href="mailto:' + emailAddress + '">' + emailAddress + '</a>';
        }
    }
}); 