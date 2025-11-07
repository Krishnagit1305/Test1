document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (email === "test@example.com" && password === "123456") {
        alert("Login successful! Redirecting...");
        window.location.href = "welcome.html"; 
    } else {
        alert("Invalid email or password. Try again.");
    }
});
