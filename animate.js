// Get the text element
const textElement = document.querySelector(".text-muted");

// Define the list of texts
const texts = ["Student", " Web Developer", "Coder", "Cyber Security Enthusiast"];

let textIndex = 0;
let text = texts[textIndex];
let index = 0;
let isTyping = true;

function typeAndDelete() {
  if (isTyping) {
      textElement.textContent = text.substring(0, index);
      index++;
      if (index > text.length) {
          isTyping = false;
          setTimeout(typeAndDelete, 1000);
      } else {
          setTimeout(typeAndDelete, 100);
      }
  } else {
      if (index >= 0) {
          textElement.textContent = text.substring(0, index);
          index--;
          setTimeout(typeAndDelete, 100); 
      } else {
          isTyping = true;
          textIndex = (textIndex + 1) % texts.length;
          text = texts[textIndex];
          setTimeout(typeAndDelete, 1000); 
      }
  }
}

typeAndDelete();


document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector('.container nav button');
    const navList = document.querySelector('.container nav ul');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('show');
        });
    }
});







