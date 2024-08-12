document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";

    // Get form values
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    let valid = true;

    // Email validation
    if (!validateEmail(email)) {
        valid = false;
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("email").classList.add("error");
    } else {
        document.getElementById("email").classList.remove("error");
    }

    // Phone number validation
    if (phone === "") {
        valid = false;
        document.getElementById("phoneError").textContent = "This field is required";
        document.getElementById("phone").classList.add("error");
    } else {
        document.getElementById("phone").classList.remove("error");
    }

    // If valid, navigate to step2.html
    if (valid) {
        window.location.href = "step2.html";
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
