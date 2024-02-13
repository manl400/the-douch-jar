function login() {
    // Example function for login action
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the username and password to your server
    // For demonstration purposes, we'll just log to the console
    console.log('Logging in with:', username, password);

    // Redirect to dashboard or show an error message
    window.location.href = 'dashboard.html';
}