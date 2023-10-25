function registerUser() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    // Client-side validation
    var errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = '';

    if (password !== confirmPassword) {
        errorMessage.innerHTML = 'Passwords do not match. Please try again.';
        return;
    }

    // Hash the password (using a simple hash function for demonstration)
    var hashedPassword = hashPassword(password);

    // Send data to serverless function or API endpoint (not implemented here)
    // Example using fetch API to send data to a serverless function
    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: hashedPassword
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful!');
            // Redirect to a different page or perform other actions upon successful registration
        } else {
            errorMessage.innerHTML = 'Registration failed. Please try again later.';
        }
    })
    .catch(error => {
        errorMessage.innerHTML = 'Error occurred while registering. Please try again later.';
        console.error('Error:', error);
    });
}

// Simple hash function (not secure, for demonstration purposes only)
function hashPassword(password) {
    var hash = 0;
    for (var i = 0; i < password.length; i++) {
        hash = (hash << 5) - hash + password.charCodeAt(i);
    }
    return hash.toString();
}
