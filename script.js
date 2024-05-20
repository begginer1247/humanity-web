function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin123' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function signup() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    
    alert('Account created successfully! You can now log in.');
    window.location.href = 'index.html';
}

function resetPassword() {
    const resetUsername = document.getElementById('reset-username').value;

    alert(`Password reset link has been sent to ${resetUsername}.`);
    window.location.href = 'index.html';
}
