// Real typing effect with cursor
document.addEventListener('DOMContentLoaded', function() {
    const typingSpan = document.querySelector('.typing-text span');
    const words = ["Web Developer", "UI/UX Designer", "Frontend Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        // If deleting, remove a character, else add a character
        if (isDeleting) {
            typingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // If word is complete
        if (!isDeleting && charIndex === currentWord.length) {
            isEnd = true;
            isDeleting = true;
            // Pause at the end of the word
            setTimeout(type, 1500);
        } 
        // If word is deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            // Pause before typing next word
            setTimeout(type, 500);
        }
        // Normal typing/deleting speed
        else {
            setTimeout(type, isDeleting ? 80 : 120);
        }
    }
    
    // Start the typing effect
    setTimeout(type, 1000);
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show sending status
            formStatus.textContent = "Sending...";
            formStatus.style.color = "var(--primary-color)";
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simulate sending email (replace with actual email service)
            setTimeout(() => {
                // Success message
                formStatus.textContent = "Message sent successfully!";
                formStatus.style.color = "green";
                contactForm.reset();
                
                // Clear status message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = "";
                }, 5000);
            }, 1500);
        });
    }
});