// JavaScript for enhancing the FrostFit website

// Fade-In Effect for Text Overlay
const textElements = document.querySelectorAll('.text-overlay p');

document.addEventListener('DOMContentLoaded', () => {
    textElements.forEach((element, index) => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transition = 'opacity 1s ease';
        }, 500 * (index + 1));
    });
});

// Button Hover Animation
const shopButton = document.querySelector('button');

shopButton.addEventListener('mouseover', () => {
    shopButton.style.backgroundColor = 'white';
    shopButton.style.color = 'black';
    shopButton.style.transform = 'translateY(-2px)';
    shopButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
});

shopButton.addEventListener('mouseout', () => {
    shopButton.style.backgroundColor = 'black';
    shopButton.style.color = 'white';
    shopButton.style.transform = 'translateY(0)';
    shopButton.style.boxShadow = 'none';
});

// Jacket Hover Effect
const jacketItems = document.querySelectorAll('.jacket-item');

jacketItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.3)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.l-header p');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(`#${link.textContent.toLowerCase()}`).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
