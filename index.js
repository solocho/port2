// JavaScript Enhancements for Click Buttons and Interactions
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".click-btn");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Image clicked"); // Removed popup
        });
    });

    // Smooth scrolling for navigation
    document.querySelector(".about").addEventListener("click", () => {
        window.scrollTo({ top: document.body.scrollHeight / 3, behavior: "smooth" });
    });
    
    document.querySelector(".contact").addEventListener("click", () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
});
