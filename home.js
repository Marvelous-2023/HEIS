// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});

// Typing Effect
const textArray = ["Welcome to Our School!", "Where Learning Begins", "Excellence in Education"];
let textIndex = 0;
let charIndex = 0;
let typingText = document.getElementById("typing-text");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        typingText.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(deleteEffect, 2000);
    }
}

function deleteEffect() {
    if (charIndex > 0) {
        typingText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Background Image Change
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let imgIndex = 0;

function changeBackground() {
    document.querySelector(".home").style.backgroundImage = url('${images[imgIndex]}');
    imgIndex = (imgIndex + 1) % images.length;
}

setInterval(changeBackground, 100);


