document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if username and password are correct
        if (username === 'username' && password === 'password') {
            // Redirect to the main page
            window.location.href = '../shop.html'; 
        } else {
            // Deny access and display an error message
            alert('Incorrect username or password. Please try again.');
        }
    });
});
