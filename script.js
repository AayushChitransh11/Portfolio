const texts = ["Full Stack Engineer", "Machine Learning Engineer"]; // Array of texts
const animatedText = document.getElementById("animated-text");
let index = 0; // Current text index
let charIndex = 0; // Current character index
let isDeleting = false; // Flag for deleting state

function type() {
    const currentText = texts[index];
    if (isDeleting) {
        charIndex--; // Delete one character
    } else {
        charIndex++; // Type one character
    }

    animatedText.textContent = currentText.substring(0, charIndex); // Update displayed text

    // Adjust speed and handle transitions
    let typingSpeed = isDeleting ? 50 : 100; // Speed up deleting
    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000; // Pause before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Move to next text
        typingSpeed = 500; // Pause before typing the next text
    }

    setTimeout(type, typingSpeed); // Schedule the next type call
}

// Start the typing effect
type();
