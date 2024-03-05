document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate form fields
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Construct the email body
        const emailBody = {
            name: name,
            email: email,
            message: message
        };

        // Simulate sending email (replace with actual code to send email)
        sendEmail(emailBody);
    });

    function sendEmail(emailBody) {
        // Simulate sending email
        setTimeout(function() {
            const randomValue = Math.random(); // Random value between 0 and 1

            // Simulate success or error message
            if (randomValue < 0.8) {
                showSuccessMessage();
            } else {
                showErrorMessage();
            }
        }, 1000); // Simulate 1-second delay
    }

    function showSuccessMessage() {
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        // Reset form fields
        contactForm.reset();

        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.classList.add('hidden');
        }, 3000);
    }

    function showErrorMessage() {
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');

        // Hide error message after 3 seconds
        setTimeout(function() {
            errorMessage.classList.add('hidden');
        }, 3000);
    }
});
