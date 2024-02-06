function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // For simplicity, hardcoding a sample username and password
    var validUsername = "user123";
    var validPassword = "pass123";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
