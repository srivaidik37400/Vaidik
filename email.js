// Add EmailJS SDK to the HTML
(function() {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    document.head.appendChild(script);
    
    // Initialize EmailJS once loaded
    script.onload = function() {
        emailjs.init("XwyR1oLNlNc8Aq9oL"); // Replace with your EmailJS public key
    };
})();

// Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show sending status
            formStatus.textContent = "Sending...";
            formStatus.style.color = "#b74b4b";
            
            // Get form data
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                to_email: "fusionmusic789@gmail.com"
            };
            
            // Send email using EmailJS
            emailjs.send('service_j999ozv', 'template_ce34lfw', templateParams) // Replace with your service and template IDs
                .then(function() {
                    formStatus.textContent = "Message sent successfully!";
                    formStatus.style.color = "green";
                    contactForm.reset();
                    
                    // Clear status message after 5 seconds
                    setTimeout(() => {
                        formStatus.textContent = "";
                    }, 5000);
                }, function(error) {
                    formStatus.textContent = "Failed to send message. Please try again.";
                    formStatus.style.color = "red";
                    console.error('Email sending failed:', error);
                });
        });
    }
});